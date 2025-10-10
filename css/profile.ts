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
    boxShadow: "#000",

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
});

export default profileStyles;
