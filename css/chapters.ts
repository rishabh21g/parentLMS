import { StyleSheet, useWindowDimensions } from "react-native";
import colors from "./root";

export const useChapterStyles = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.ui.background,
      alignItems: "center",
      paddingTop: 20,
    },

    scrollContent: {
      alignItems: "center",
      paddingBottom: 30,
    },

    subjectHeader: {
      backgroundColor: colors.ui.surface,
      borderWidth: 2,
      borderColor: colors.neutral[400],
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    subjectTitle: {
      fontSize: isSmallScreen ? 18 : 22,
      fontWeight: "700",
      color: colors.ui.textPrimary,
      textAlign: "center",
    },

    chaptersHeader: {
      backgroundColor: colors.ui.surface,
      borderWidth: 2,
      borderColor: colors.primary[500],
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 20,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    chaptersTitle: {
      fontSize: isSmallScreen ? 16 : 18,
      fontWeight: "700",
      color: colors.primary[400],
      textAlign: "center",
    },

    chaptersContainer: {
      backgroundColor: colors.ui.surface,
      borderWidth: 2,
      borderColor: colors.neutral[400],
      borderRadius: 16,
      paddingVertical: 16,
      paddingHorizontal: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },

    chapterItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 18,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.neutral[600],
      backgroundColor: colors.ui.surface,
    },

    lastChapterItem: {
      borderBottomWidth: 0,
    },

    chapterName: {
      fontSize: isSmallScreen ? 14 : 16,
      fontWeight: "600",
      color: colors.ui.textPrimary,
      flex: 1,
    },

    chapterArrow: {
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center",
    },

    arrowText: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.ui.textSecondary,
    },

    errorText: {
      fontSize: isSmallScreen ? 16 : 18,
      fontWeight: "600",
      color: colors.danger,
      textAlign: "center",
      marginTop: 50,
    },
  });
};