import { StatItem } from "@/types/performanceStats";
import { Subject } from "@/types/subject";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, View } from "react-native";
import CircleProgress from "./CircleProgress";

interface OverallDataProps {
  subject: Subject;
}

const OverallData: React.FC<OverallDataProps> = ({ subject }) => {
  const overallData: StatItem[] = [
    {
      label: "Accuracy Test",
      value: subject.overall.accuracyTest,
      color: "#EF4444",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
      label: "Accuracy Practice",
      value: subject.overall.accuracyPractice,
      color: "#EF4444",
      icon: <FontAwesome name="check-circle" size={16} color={"#EF4444"} />,
    },
    {
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
    {
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
      <View>
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
      <View>
        <Text>Total Average:</Text>
        <View>
          <View style={{ width: `${average}%` }} />
        </View>
        <Text>{average}%</Text>
      </View>
    </View>
  );
};

export default OverallData;