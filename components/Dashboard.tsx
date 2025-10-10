import dummySubjects from "@/data/dummydata";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../css/dashboard";

const Dashboard = () => {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;
  const isTablet = width > 800;
  const [subjects] = useState<object[]>(dummySubjects);
  const totalChapters = subjects.reduce(
    (sum, subject: any) => sum + subject.chapters.length,
    0
  );
  const completedChapters = 35;
  const overallProgress = Math.round(
    subjects.reduce((sum, subject: any) => sum + subject.progress, 0) /
      subjects.length
  );
 

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <View style={styles.header}>
            <View style={styles.profileSection}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>S</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.studentName}>Student Name</Text>
                <Text style={styles.grade}>Grade 8 - Section A</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Overall Stats */}
        <View
          style={[
            styles.overallStatsCard,
            isTablet && {
              flexDirection: "column",
              maxWidth: 600,
              alignSelf: "center",
            },
          ]}
        >
          <Text style={styles.cardTitle}>Overall Progress</Text>

          {/* Progress Bar */}
          <View
            style={[
              styles.progressBarContainer,
              isTablet && { paddingHorizontal: 10 },
            ]}
          >
            <View
              style={[
                styles.progressBarBackground,
                {
                  height: isTablet ? 20 : 16,
                  minWidth: isTablet ? 300 : 200,
                },
              ]}
            >
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width: `${overallProgress}%`,
                    borderRadius: isTablet ? 10 : 8,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.progressPercentageText,
                { fontSize: isTablet ? 20 : 18 },
              ]}
            >
              {overallProgress}%
            </Text>
          </View>

          {/* Stats Info */}
          <View
            style={[
              styles.statsInfoContainer,
              isTablet && { paddingHorizontal: 40 },
            ]}
          >
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statValue,
                  { fontSize: isSmall ? 18 : isTablet ? 24 : 20 },
                ]}
              >
                {subjects.length}
              </Text>
              <Text
                style={[styles.statLabel, { fontSize: isTablet ? 14 : 12 }]}
              >
                Total Subjects
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statValue,
                  { fontSize: isSmall ? 18 : isTablet ? 24 : 20 },
                ]}
              >
                {totalChapters}
              </Text>
              <Text
                style={[styles.statLabel, { fontSize: isTablet ? 14 : 12 }]}
              >
                Total Chapters
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statValue,
                  { fontSize: isSmall ? 18 : isTablet ? 24 : 20 },
                ]}
              >
                {completedChapters}
              </Text>
              <Text
                style={[styles.statLabel, { fontSize: isTablet ? 14 : 12 }]}
              >
                Completed
              </Text>
            </View>
          </View>
        </View>

        {/* Subjects */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { fontSize: isSmall ? 18 : 20 }]}>
            Subjects
          </Text>
          <View style={styles.subjectsGrid}>
            {subjects.map((subject: any) => (
              <TouchableOpacity
                key={subject.id}
                style={[
                  styles.subjectCard,
                  { width: isTablet ? "30%" : isSmall ? "100%" : "48%" },
                ]}
                onPress={() => router.push(`/subjects/${subject.id}`)}
              >
                <View
                  style={[
                    styles.subjectIcon,
                    { backgroundColor: subject.color },
                  ]}
                >
                  <Text style={styles.subjectIconText}>{subject.name[0]}</Text>
                </View>
                <Text
                  style={[styles.subjectName, { fontSize: isSmall ? 13 : 14 }]}
                >
                  {subject.name}
                </Text>
                <View style={styles.subjectProgressContainer}>
                  <View style={styles.subjectProgressBackground}>
                    <View
                      style={[
                        styles.subjectProgressFill,
                        { 
                          width: `${subject.overall.coverage}%`,
                          backgroundColor: subject.color 
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.subjectProgressText}>
                    {subject.overall.coverage}%
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
