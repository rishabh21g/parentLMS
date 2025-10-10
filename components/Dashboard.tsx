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

  // const fetchSubjects = async () : Promise<void> => {
  //   try{
  //      const response = await axios.get("")
  //      const subjects : any[] = response.data
  //       setSubjects(subjects)
  //   }catch(error : unknown){
  //     console.error("Error fetching subjects:", error);
  //   }
  //   finally{}
  // }

  // useEffect(() => {
  //   fetchSubjects();
  // }, []);
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
            isTablet && { flexDirection: "row" },
          ]}
        >
          <Text style={styles.cardTitle}>Overall Progress</Text>
          <View style={[styles.progressContainer, isTablet && { flex: 1 }]}>
            <View
              style={[
                styles.progressCircle,
                {
                  width: isSmall ? 60 : 80,
                  height: isSmall ? 60 : 80,
                  borderRadius: isSmall ? 30 : 40,
                },
              ]}
            >
              <Text
                style={[styles.progressText, { fontSize: isSmall ? 16 : 18 }]}
              >
                83%
              </Text>
            </View>
            <View style={styles.statsInfo}>
              <View style={styles.statItem}>
                <Text
                  style={[styles.statValue, { fontSize: isSmall ? 18 : 20 }]}
                >
                  6
                </Text>
                <Text style={styles.statLabel}>Subjects</Text>
              </View>
              <View style={styles.statItem}>
                <Text
                  style={[styles.statValue, { fontSize: isSmall ? 18 : 20 }]}
                >
                  42
                </Text>
                <Text style={styles.statLabel}>Chapters</Text>
              </View>
              <View style={styles.statItem}>
                <Text
                  style={[styles.statValue, { fontSize: isSmall ? 18 : 20 }]}
                >
                  35
                </Text>
                <Text style={styles.statLabel}>Completed</Text>
              </View>
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
  
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
