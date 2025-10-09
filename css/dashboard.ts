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
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressCircle: {
    borderWidth: 6,
    borderColor: colors.primary[500],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    backgroundColor: colors.ui.surface,
  },
  progressText: {
    fontWeight: "bold",
    color: colors.ui.textPrimary,
  },
  statsInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
    color: colors.ui.textPrimary,
  },
  statLabel: {
    fontSize: 12,
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
    borderRadius: 12,
    alignItems: "center",
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
  
});
export default styles
