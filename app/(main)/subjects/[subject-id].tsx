import OverallData from "@/components/OverallData";
import { useResponsiveStyles } from "@/css/subject";
import dummySubjects from "@/data/dummydata";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Subject as SubjectType } from "../../../types/subject";

const Subject: React.FC = () => {
  const { "subject-id": subjectID } = useLocalSearchParams();
  const id = Number(subjectID);
  const styles = useResponsiveStyles();
  const { width, height } = useWindowDimensions();
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

  return (
    <SafeAreaView style={[styles.container, { width, height }]}>
      {/* Subject Name */}
      <View style={styles.header}>
        <Text style={styles.subjectTitle}>{subject.name}</Text>
      </View>

      {/* Overall Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Overall Stats</Text>
        <View style={styles.chartContainer}>
          <OverallData subject={subject} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Subject;
