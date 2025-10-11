import colors from "@/css/root";
import { StatItem } from "@/types/performanceStats";
import { Subject } from "@/types/subject";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import CircleProgress from "./CircleProgress";

interface OverallDataProps {
  subject: Subject;
}

const OverallData: React.FC<OverallDataProps> = ({ subject }) => {
  const { width } = useWindowDimensions();

  // Adjust circle size responsively
  const circleSize = width < 360 ? 90 : width < 480 ? 100 : 110;
  const gap = width < 400 ? 14 : 20;

  const overallData: StatItem[] = [
    {
      name: "accuracyTest",
      label: "Accuracy Test",
      value: subject.overall.accuracyTest,
      color: "#fa7676ff",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
      name: "accuracyPractice",
      label: "Accuracy Practice",
      value: subject.overall.accuracyPractice,
      color: "#EF4444",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
      name: "speedTest",
      label: "Speed Test",
      value: subject.overall.speedTest,
      color: "#55f3beff",
      icon: (
        <MaterialCommunityIcons
          name="speedometer"
          size={16}
          color={"#10B981"}
        />
      ),
    },
    {
      name: "speedPractice",
      label: "Speed Practice",
      value: subject.overall.speedPractice,
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
      name: "coverage",
      label: "Coverage",
      value: subject.overall.coverage,
      color: "#60A5FA",
      icon: <FontAwesome name="tasks" size={16} color={"#60A5FA"} />,
    },
    {
      name: "comparison",
      label: "Comparison",
      value: subject.overall.comparison,
      color: "#F59E0B",
      icon: <Entypo name="area-graph" size={16} color="#F59E0B" />,
    },
  ];

  const average = Math.round(
    (subject.overall.accuracyTest +
      subject.overall.speedTest +
      subject.overall.coverage +
      subject.overall.comparison +
      subject.overall.accuracyPractice +
      subject.overall.speedPractice) /
      6
  );

  return (
    <View style={styles.container}>
      {/* Circular Progress Charts */}
      <View
        style={[
          styles.gridContainer,
          { gap, justifyContent: "center", paddingHorizontal: width * 0.04 },
        ]}
      >
        {overallData.map((data, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: `/subjects/chapters/[chapterLabel]`,
                params: { subjectId: subject.id, chapterLabel: data.name },
              })
            }
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <CircleProgress
                percentage={data.value}
                color={data.color}
                label={data.label}
                icon={data.icon}
                size={circleSize}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Total Average */}
      <View style={styles.averageContainer}>
        <Text style={styles.averageText}>Total Average: {average}%</Text>
        <View style={styles.progressBarOuter}>
          <View style={[styles.progressBarInner, { width: `${average}%` }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  averageContainer: {
    marginTop: 28,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  averageText: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    color: colors.ui.textPrimary,
    textAlign: "center",
  },
  progressBarOuter: {
    width: "80%",
    maxWidth: 240,
    height: 10,
    backgroundColor: colors.neutral[100],
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border.muted,
  },
  progressBarInner: {
    height: "100%",
    backgroundColor: colors.primary[400],
    borderRadius: 4,
  },
});

export default OverallData;
