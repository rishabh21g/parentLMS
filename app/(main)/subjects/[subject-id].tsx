import { useResponsiveStyles } from "@/css/subject";
import dummySubjects from "@/data/dummydata";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Subject as SubjectType } from "../../../types/subject";

const Subject: React.FC = () => {
  const { ["subject-id"]: subjectID } = useLocalSearchParams();
  const id = Number(subjectID);

  const styles = useResponsiveStyles();
  const { width } = useWindowDimensions();
  const [showChapters, setShowChapters] = useState(false);

  const subject: SubjectType | undefined = dummySubjects.find(
    (s) => s.id === id
  );

  if (!subject) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Subject not found</Text>
      </View>
    );
  }

  const overallData = [
    { label: "Accuracy", value: subject.overall.accuracy, color: "#EF4444" },
    { label: "Speed", value: subject.overall.speed, color: "#10B981" },
    { label: "Coverage", value: subject.overall.coverage, color: "#60A5FA" },
    {
      label: "Comparison",
      value: subject.overall.comparison,
      color: "#F59E0B",
    },
  ];

  const average = Math.round(
    (subject.overall.accuracy +
      subject.overall.speed +
      subject.overall.coverage +
      subject.overall.comparison) /
      4
  );

  const chartWidth = width - 80;
  const barHeight = 40;

  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <View style={styles.header}>
        <Text style={[styles.subjectTitle, { width: chartWidth }]}>
          {subject.name}
        </Text>
      </View>

      <View style={[styles.statsContainer, { width: chartWidth }]}>
        <Text style={styles.sectionTitle}>Overall Stats</Text>

        <View style={styles.chartContainer}>
          {overallData.map((item) => (
            <View
              key={item.label}
              style={[styles.barContainer, { width: chartWidth - 40 }]}
            >
              <View style={styles.barLabelContainer}>
                <Text style={styles.barLabel}>{item.label}</Text>
                <Text style={styles.barValue}>{item.value}%</Text>
              </View>
              <View
                style={[
                  styles.barBackground,
                  { width: chartWidth - 120, height: barHeight },
                ]}
              >
                <View
                  style={[
                    styles.barFill,
                    {
                      width: `${item.value}%`,
                      height: barHeight,
                      backgroundColor: item.color,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.averageContainer, { width: chartWidth - 40 }]}>
          <Text style={styles.averageLabel}>avg:</Text>
          <View style={[styles.averageBar, { width: chartWidth - 160 }]}>
            <View style={[styles.averageProgress, { width: `${average}%` }]} />
          </View>
          <Text style={styles.averageValue}>{average}%</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.chaptersButton, { width: chartWidth }]}
        onPress={() => setShowChapters(!showChapters)}
      >
        <Text style={styles.chaptersButtonText}>
          {showChapters ? "Hide Chapters" : "Show Chapters"}
        </Text>
      </TouchableOpacity>

      {showChapters && (
        <View style={[styles.chaptersContainer, { width: chartWidth }]}>
          {subject.chapters.map((chapter) => (
            <TouchableOpacity
              key={chapter.id}
              style={[styles.chapterCard, { width: chartWidth }]}
              onPress={() => console.log(`Navigate to chapter ${chapter.id}`)}
            >
              <Text style={styles.chapterName}>{chapter.name}</Text>
              <View style={styles.chapterStats}>
                {["accuracy", "speed", "coverage", "comparison"].map((key) => (
                  <View key={key} style={styles.statItem}>
                    <Text style={styles.statLabel}>{key}</Text>
                    <Text style={styles.statValue}>
                      {chapter[key as keyof typeof chapter]}%
                    </Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Subject;
