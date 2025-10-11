import { StyleSheet } from "react-native";
import colors from "./root";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  header: {
    backgroundColor: colors.neutral[800],
    padding: 20,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary[600],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
    borderColor: colors.primary[400],
  },
  avatarText: {
    color: colors.ui.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    flex: 1,
  },
  studentName: {
    color: colors.ui.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  grade: {
    color: colors.ui.textSecondary,
    fontSize: 14,
  },
  profileButton: {
    backgroundColor: colors.button.primary.bg,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.button.primary.border,
  },
  profileButtonText: {
    color: colors.button.primary.text,
    fontSize: 14,
    fontWeight: "bold",
  },
  overallStatsCard: {
    backgroundColor: colors.ui.surface,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.ui.textPrimary,
    marginBottom: 15,
    textAlign: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 2, // Add some padding
  },
  progressBarBackground: {
    flex: 1,
    height: 1, // Increase height for better visibility
    backgroundColor: colors.neutral[600],
    borderRadius: 8,
    marginRight: 15, // Increase margin
    overflow: 'hidden',
    minWidth: 200, // Ensure minimum width on larger screens
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    minWidth: 2, 
  },
  progressPercentageText: {
    fontSize: 18, // Increase font size for larger screens
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
    minWidth: 60, 
  },
  statsInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
    color: colors.ui.textPrimary,
  },
  statLabel: {
    fontSize: 20,
    fontWeight:"600",
    color: colors.ui.muted,
    marginTop: 2,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: colors.ui.textPrimary,
    marginBottom: 15,
  },
  subjectsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  subjectCard: {
    backgroundColor: colors.ui.surface,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  subjectIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  subjectIconText: {
    color: colors.ui.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
  },
  subjectName: {
    fontWeight: "bold",
    color: colors.ui.textPrimary,
    marginBottom: 8,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: colors.neutral[600],
    borderRadius: 3,
    marginBottom: 5,
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
  progressPercentage: {
    fontSize: 12,
    color: colors.ui.muted,
  },
  subjectProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  subjectProgressBackground: {
    flex: 1,
    height: 4, // Thin height
    backgroundColor: colors.neutral[600],
    borderRadius: 2,
    marginRight: 8,
    overflow: 'hidden',
  },
  subjectProgressFill: {
    height: '100%',
    borderRadius: 2,
    minWidth: 1, // Ensure it's visible even at low percentages
  },
  subjectProgressText: {
    fontSize: 14,
    color: colors.ui.muted,
    minWidth: 30,
    textAlign: 'right',
    fontWeight: "700",
  },
});
export default styles
