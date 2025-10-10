import CircleProgress from "@/components/CircleProgress";
import { useResponsiveStyles } from "@/css/subject";
import dummySubjects from "@/data/dummydata";
import { StatItem } from "@/types/performanceStats";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Text,
  View,
  useWindowDimensions
} from "react-native";
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
  const overallData: StatItem[] = [
    {
      label: "Accuracy",
      value: subject.overall.accuracy,
      color: "#EF4444",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
      label: "Speed",
      value: subject.overall.speed,
      color: "#10B981",
      icon: (
        <MaterialCommunityIcons
          name="speedometer"
          size={16}
          color={"#10B981"}
        />
      ),
    },
    {
      label: "Coverage",
      value: subject.overall.coverage,
      color: "#60A5FA",
      icon: <FontAwesome name="tasks" size={16} color={"#60A5FA"} />,
    },
    {
      label: "Comparison",
      value: subject.overall.comparison,
      color: "#F59E0B",

      icon: <Entypo name="area-graph" size={16} color="#F59E0B" />,
    },
  ];

  const average = Math.round(
    (subject.overall.accuracy +
      subject.overall.speed +
      subject.overall.coverage +
      subject.overall.comparison) /
      4
  );

  return (
    <SafeAreaView style={[styles.container, { width, height }]}>
      {/* Subject Name */}
      <View style={styles.header}>
        <Text style={styles.subjectTitle}>{subject.name}</Text>
      </View>

      {/* Circular Progress Charts */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Overall Stats</Text>

        <View style={styles.chartContainer}>
          {overallData.map((data, index) => (
            <View key={index}>
              <CircleProgress
                percentage={data.value}
                color={data.color}
                label={data.label}
                icon={data.icon}
              />
            </View>
          ))}
        </View>

        {/* Total Average */}
        <View style={styles.averageContainer}>
          <Text style={styles.averageLabel}>Total Average:</Text>
          <View style={styles.averageBar}>
            <View style={[styles.averageProgress, { width: `${average}%` }]} />
          </View>
          <Text style={styles.averageValue}>{average}%</Text>
        </View>
      </View>

   
    </SafeAreaView>
  );
};

export default Subject;
