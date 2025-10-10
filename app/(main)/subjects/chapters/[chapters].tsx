import { useChapterStyles } from "@/css/chapters";
import dummySubjects from "@/data/dummydata";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Chapters: React.FC = () => {
  const { chapters: subjectID } = useLocalSearchParams();
  const id = Number(subjectID);
  const { width, height } = useWindowDimensions();
  const styles = useChapterStyles();

  const subject = dummySubjects.find((s) => s.id === id);

  if (!subject) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Subject not found</Text>
      </SafeAreaView>
    );
  }

  const containerWidth = width - 40;

  return (
    <SafeAreaView style={[styles.container, { width, height }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Subject Header */}
        <TouchableOpacity
          style={[styles.subjectHeader, { width: containerWidth }]}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="white" />
          <Text style={styles.subjectTitle}>{subject.name}</Text>
        </TouchableOpacity>

        {/* Chapters List Container */}
        <View style={[styles.chaptersContainer, { width: containerWidth }]}>
          {subject.chapters.map((chapter, index) => (
            <TouchableOpacity
              key={chapter.id}
              style={[
                styles.chapterItem,
                { width: containerWidth - 32 },
                index === subject.chapters.length - 1 && styles.lastChapterItem,
              ]}
              onPress={() => {
                // Navigate to individual chapter details if needed
                console.log(
                  `Navigate to chapter ${chapter.id} of subject ${subject.id}`
                );
              }}
            >
              <Text style={styles.chapterName}>{chapter.name}</Text>
              <View style={styles.chapterArrow}>
                <Text style={styles.arrowText}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chapters;
