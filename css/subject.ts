import { StyleSheet, useWindowDimensions } from "react-native";
import colors from "../css/root"; // Adjust path if different

export const useResponsiveStyles = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.ui.background,
      paddingVertical: 16,
      alignItems: "center",
    },

    header: {
      alignItems: "center",
      marginBottom: 20,
    },

    subjectTitle: {
      fontSize: isSmallScreen ? 20 : 24,
      fontWeight: "700",
      color: colors.ui.textPrimary,
      textAlign: "center",
    },

    statsContainer: {
      marginBottom: 20,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.ui.surface,
      borderRadius: 12,
      padding: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },

    sectionTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.ui.textPrimary,
      marginBottom: 12,
      textAlign: "center",
    },

    chartContainer: {
      width: "100%",
      gap: 10,
    },

    barContainer: {
      marginBottom: 12,
    },

    barLabelContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 6,
    },

    barLabel: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.ui.textSecondary,
    },

    barValue: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.ui.textPrimary,
    },

    barBackground: {
      backgroundColor: colors.neutral[700],
      borderRadius: 4,
      overflow: "hidden",
    },

    barFill: {
      height: "100%",
      borderRadius: 4,
    },

    averageContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },

    averageLabel: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.ui.textSecondary,
      marginRight: 8,
    },

    averageBar: {
      height: 6,
      backgroundColor: colors.neutral[600],
      borderRadius: 3,
      overflow: "hidden",
      flex: 1,
      marginHorizontal: 6,
    },

    averageProgress: {
      height: "100%",
      backgroundColor: colors.primary[500],
      borderRadius: 3,
    },

    averageValue: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.ui.textPrimary,
    },

    chaptersButton: {
      backgroundColor: colors.primary[500],
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },

    chaptersButtonText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },

    chaptersContainer: {
      width: "100%",
      alignItems: "center",
      gap: 12,
      paddingBottom: 60,
    },

    chapterCard: {
      backgroundColor: colors.ui.surface,
      borderRadius: 10,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.border.default,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },

    chapterName: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.ui.textPrimary,
      marginBottom: 8,
    },

    chapterStats: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },

    statItem: {
      width: "48%",
      marginBottom: 8,
      backgroundColor: colors.ui.background,
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 10,
      alignItems: "center",
    },

    statLabel: {
      fontSize: 12,
      color: colors.ui.textSecondary,
      marginBottom: 2,
    },

    statValue: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.ui.textPrimary,
    },

    errorText: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "600",
      color: colors.danger,
      marginTop: 50,
    },
  });
};
