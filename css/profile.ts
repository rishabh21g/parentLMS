import { StyleSheet } from "react-native";
import colors from "./root";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.ui.textSecondary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  errorText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.danger,
    textAlign: "center",
  },
  header: {
    marginTop: 20,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.ui.textPrimary,
  },
  profileCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 14,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.primary[400],
  },
  defaultAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.neutral[700],
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary[400],
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 18,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.ui.textPrimary,
    marginBottom: 4,
    textAlign: "center",
  },
  email: {
    fontSize: 14,
    color: colors.ui.textSecondary,
    marginBottom: 2,
    textAlign: "center",
  },
  phoneNumber: {
    fontSize: 14,
    color: colors.ui.textSecondary,
    textAlign: "center",
  },
  ratingSection: {
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border.muted,
  },
  ratingLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.ui.textPrimary,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.warning,
  },
  starContainer: {
    flexDirection: "row",
    gap: 1,
  },
  statsContainer: {
    marginBottom: 20,
    flex: 1,
    flexDirection: "column",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.ui.textPrimary,
    marginBottom: 12,
    textAlign: "center",
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // spread cards evenly
    paddingHorizontal: 10,
  },

  statCard: {
    width: "47%", // 2 per row with spacing
    backgroundColor: colors.ui.surface,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border.default,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  statIcon: {
    alignSelf: "center",
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.ui.textSecondary,
    textAlign: "center",
    marginBottom: 4,
  },

  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.ui.textPrimary,
    textAlign: "center",
    marginBottom: 8,
  },

  progressBar: {
    height: 4,
    backgroundColor: colors.neutral[700],
    borderRadius: 2,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.primary[500],
    borderRadius: 2,
  },
});

export default profileStyles;
