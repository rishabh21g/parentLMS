import { useResponsiveStyles } from "@/css/subject";
import dummySubjects from "@/data/dummydata";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../../../css/dashboard";
import { Subject as SubjectType } from "../../../types/subject";

const Subject: React.FC = () => {
  const { ["subject-id"]: subjectID } = useLocalSearchParams();
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
    <SafeAreaView style={[styles.container, { width, height }]}>
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <View style={[profile.header]}>
          <View style={profile.profileSection}>
            <View style={profile.avatar}>
              <Text style={profile.avatarText}>S</Text>
            </View>
            <View style={profile.profileInfo}>
              <Text style={profile.studentName}>Student Name</Text>
              <Text style={profile.grade}>Grade 8 - Section A</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
          <Text style={styles.averageLabel}>Total Average:</Text>
          <View style={[styles.averageBar, { width: chartWidth - 160 }]}>
            <View style={[styles.averageProgress, { width: `${average}%` }]} />
          </View>
          <Text style={styles.averageValue}>{average}%</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.chaptersButton, { width: chartWidth }]}
        onPress={() => router.push(`/subjects/chapters/${subject.id}`)}
      >
        <Text style={styles.chaptersButtonText}>Chapters</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Subject;
