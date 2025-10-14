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

  // Responsive sizing
  const isSmall = width < 360;
  const isMedium = width >= 360 && width < 480;
  const isLarge = width >= 480;

  const circleSize = isSmall ? 85 : isMedium ? 100 : 115;
  const gap = isSmall ? 12 : isMedium ? 16 : 20;
  const iconSize = isSmall ? 14 : isMedium ? 16 : 18;
  const badgeIconSize = isSmall ? 12 : 14;
  const averageFontSize = isSmall ? 14 : isMedium ? 15 : 16;
  const badgeFontSize = isSmall ? 12 : isMedium ? 13 : 14;
  const progressBarHeight = isSmall ? 8 : 10;
  const progressBarWidth = isSmall ? "85%" : "80%";

  const overallData: StatItem[] = [
    {
      name: "coverage",
      label: "Coverage",
      value: subject.overall.coverage,
      color: colors.info,
      icon: <FontAwesome name="tasks" size={iconSize} color={colors.info} />,
    },
    {
      name: "comparison",
      label: "Comparison",
      value: subject.overall.comparison,
      color: colors.warning,
      icon: <Entypo name="area-graph" size={iconSize} color={colors.warning} />,
    },
    {
      name: "accuracyTest",
      label: "Accuracy Test",
      value: subject.overall.accuracyTest,
      color: colors.danger,
      icon: <FontAwesome name="check-circle" size={iconSize} color={colors.danger} />,
    },
    {
      name: "accuracyPractice",
      label: "Accuracy Practice",
      value: subject.overall.accuracyPractice,
      color: colors.danger,
      icon: <FontAwesome name="check-circle" size={iconSize} color={colors.danger} />,
    },
    {
      name: "speedTest",
      label: "Speed Test",
      value: subject.overall.speedTest,
      color: colors.success,
      icon: (
        <MaterialCommunityIcons name="speedometer" size={iconSize} color={colors.success} />
      ),
    },
    {
      name: "speedPractice",
      label: "Speed Practice",
      value: subject.overall.speedPractice,
      color: colors.success,
      icon: (
        <MaterialCommunityIcons name="speedometer" size={iconSize} color={colors.success} />
      ),
    },
  ];

  const byName = (name: StatItem["name"]) => overallData.find((d) => d.name === name)!;

  const renderStat = (data: StatItem) => (
    <TouchableOpacity
      key={data.name}
      activeOpacity={0.85}
      onPress={() =>
        router.push({
          pathname: `/subjects/chapters/[chapterLabel]`,
          params: { subjectId: subject.id, chapterLabel: data.name },
        })
      }
      style={styles.statTouchable}
    >
      <CircleProgress
        percentage={data.value}
        color={data.color}
        label={data.label}
        icon={data.icon}
        size={circleSize}
      />
    </TouchableOpacity>
  );

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
      {/* Total Average */}
      <View style={styles.averageContainer}>
        <Text style={[styles.averageText, { fontSize: averageFontSize }]}>
          Total Average: {average}%
        </Text>
        <View style={[styles.progressBarOuter, { width: progressBarWidth, height: progressBarHeight }]}>
          <View style={[styles.progressBarInner, { width: `${average}%` }]} />
        </View>
      </View>

      {/* Coverage | Comparison (two columns) */}
      <View style={[styles.sectionRow, { gap, paddingHorizontal: width * 0.04 }]}>
        <View style={styles.col}>{renderStat(byName("coverage"))}</View>
        <View style={styles.col}>{renderStat(byName("comparison"))}</View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Test vs Practice columns with vertical divider */}
      <View style={[styles.sectionRow, { gap: gap * 0.6, paddingHorizontal: width * 0.04 }]}>
        <View style={styles.col}>
          <View style={[styles.headerBadge, { paddingHorizontal: isSmall ? 10 : 12 }]}>
            <FontAwesome name="trophy" size={badgeIconSize} color={colors.warning} />
            <Text style={[styles.sectionHeaderCatchy, { fontSize: badgeFontSize }]}>
              Test Mode
            </Text>
          </View>
          <View style={[styles.columnStack, { gap }]}>
            {renderStat(byName("accuracyTest"))}
            {renderStat(byName("speedTest"))}
          </View>
        </View>

        {/* Vertical Divider */}
        <View style={styles.verticalDivider} />

        <View style={styles.col}>
          <View style={[styles.headerBadge, { paddingHorizontal: isSmall ? 10 : 12 }]}>
            <MaterialCommunityIcons name="dumbbell" size={badgeIconSize} color={colors.primary[400]} />
            <Text style={[styles.sectionHeaderCatchy, { fontSize: badgeFontSize }]}>
              Practice Mode
            </Text>
          </View>
          <View style={[styles.columnStack, { gap }]}>
            {renderStat(byName("accuracyPractice"))}
            {renderStat(byName("speedPractice"))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  averageContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 12,
  },
  averageText: {
    fontWeight: "600",
    marginBottom: 8,
    color: colors.ui.textPrimary,
    textAlign: "center",
  },
  progressBarOuter: {
    maxWidth: 280,
    backgroundColor: colors.neutral[600],
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
  sectionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 12,
  },
  col: {
    flex: 1,
    alignItems: "center",
  },
  columnStack: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  statTouchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: "92%",
    height: 1,
    backgroundColor: colors.border.muted,
    alignSelf: "center",
    marginVertical: 12,
  },
  headerBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.neutral[700],
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border.muted,
    marginBottom: 10,
  },
  sectionHeaderCatchy: {
    fontWeight: "700",
    color: colors.ui.textPrimary,
    letterSpacing: 0.3,
  },
  verticalDivider: {
    width: 1,
    height: "100%",
    backgroundColor: colors.border.default,
    alignSelf: "stretch",
    marginHorizontal: 2,
  },
});

export default OverallData;
