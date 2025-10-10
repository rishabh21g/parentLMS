import { StyleSheet, useWindowDimensions } from "react-native";
import colors from "../css/root";

export const useResponsiveStyles = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.ui.background,
      alignItems: "center",
      paddingBlock: 20,
    },

    header: {
      alignItems: "center",
      marginBottom: 20,
      marginTop: 25,
    },
    subjectTitle: {
      fontSize: isSmallScreen ? 20 : 24,
      fontWeight: "700",
      color: colors.ui.textPrimary,
      textAlign: "center",
    },

    statsContainer: {
      width:width,
      marginBottom: 20,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.ui.background,
      borderRadius: 12,
      padding: 16,
    
    },

    sectionTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.ui.textPrimary,
      marginBottom: 12,
      textAlign: "center",
    },

    // CIRCULAR CHART STYLES
    chartContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: 10,
      gap: 20,
    },

    // AVERAGE BAR
    averageContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
      width: "90%",
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
      borderWidth: 1,
      borderColor: colors.border.strong,
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

    // CHAPTERS BUTTON
    chaptersButton: {
      backgroundColor: colors.primary[500],
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
      width: "80%",
    },
    chaptersButtonText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 0.5,
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
