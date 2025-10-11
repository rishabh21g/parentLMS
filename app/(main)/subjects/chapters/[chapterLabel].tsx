import colors from "@/css/root";
import dummySubjects from "@/data/dummydata";
import { Chapter } from "@/types/subject";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ChapterLable = () => {
  const data: {
    chapterLabel: string;
    subjectId: string;
  } = useLocalSearchParams();
  const { chapterLabel, subjectId } = data;
  const chapters = dummySubjects.find((subject) => subject.id === Number(subjectId))?.chapters;
  
  if (!chapters) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No chapters found</Text>
      </View>
    );
  }

  // Function to get different colors for each chapter
  const getChapterColors = (index: number) => {
    const colorVariants = [
      { text: colors.primary[300], bar: colors.primary[500] },
      { text: colors.secondary[300], bar: colors.secondary[500] },
      { text: colors.warning, bar: colors.warning },
      { text: colors.success, bar: colors.success },
      { text: colors.info, bar: colors.info },
      { text: colors.primary[400], bar: colors.primary[600] },
    ];
    return colorVariants[index % colorVariants.length];
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Total Chapters Header */}
        <View style={styles.headerCard}>
          <Text style={styles.headerText}>Total Chapters : {chapters.length}</Text>
        </View>

        {/* Chapter Progress Cards */}
        {chapters.map((chapter, index) => {
          const percentage = chapter[chapterLabel as keyof Chapter] as number || 0;
          const chapterColors = getChapterColors(index);
          
          return (
            <View key={index} style={styles.chapterCard}>
              {/* Chapter Name */}
              <Text style={[styles.chapterNameText, { color: chapterColors.text }]}>
                {chapter.name}
              </Text>
              
              {/* Metric and Percentage */}
              <Text style={styles.metricText}>
                {chapterLabel} : {percentage}%
              </Text>
              
              {/* Progress Bar */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { 
                        width: `${percentage}%`,
                        backgroundColor: chapterColors.bar
                      }
                    ]} 
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  headerCard: {
    backgroundColor: colors.ui.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.default,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: colors.ui.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  chapterCard: {
    backgroundColor: colors.ui.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.default,
    padding: 20,
    gap: 12,
  },
  chapterNameText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  metricText: {
    color: colors.ui.textSecondary,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  progressContainer: {
    width: '100%',
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.neutral[700],
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    position: 'relative',
  },
  errorText: {
    color: colors.danger,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ChapterLable;
