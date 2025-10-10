import colors from "@/css/root";
import { StatItem } from "@/types/performanceStats";
import { Subject } from "@/types/subject";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CircleProgress from "./CircleProgress";

interface OverallDataProps {
  subject: Subject;
}

const OverallData: React.FC<OverallDataProps> = ({ subject }) => {
  const overallData: StatItem[] = [
    {
      name :"accuracyTest",
      label: "Accuracy Test",
      value: subject.overall.accuracyTest,
      color: "#EF4444",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
      name :"accuracyPractice",
      label: "Accuracy Practice",
      value: subject.overall.accuracyPractice,
      color: "#EF4444",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
      name :"speedTest",
      label: "Speed Test",
      value: subject.overall.speedTest,
      color: "#10B981",
      icon: (
        <MaterialCommunityIcons
          name="speedometer"
          size={16}
          color={"#10B981"}
        />
      ),
    },
    { name :"speedPractice",
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
      name :"coverage",
      label: "Coverage",
      value: subject.overall.coverage,
      color: "#60A5FA",
      icon: <FontAwesome name="tasks" size={16} color={"#60A5FA"} />,
    },
    {
      name :"comparison",
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
    <View>
      {/* Circular Progress Charts */}
      <View
        style={{
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {overallData.map((data, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              router.push({
                pathname: `/subjects/chapters/[chapter-label]`,
                params: { subjectId: subject.id, "chapter-label": data.name },
              });
            }}
          >
            <CircleProgress
              percentage={data.value}
              color={data.color}
              label={data.label}
              icon={data.icon}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Total Average */}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 8,
            color: colors.ui.textPrimary,
          }}
        >
          Total Average: {average}%
        </Text>
        <View
          style={{
            width: 200,
            height: 10,
            backgroundColor: colors.neutral[700],
            borderRadius: 5,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: colors.border.muted,
          }}
        >
          <View
            style={{
              width: `${average}%`,
              height: "100%",
              backgroundColor: colors.primary[500],
              borderRadius: 4,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default OverallData;
