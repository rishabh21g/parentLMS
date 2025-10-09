import { StyleSheet } from "react-native";
import colors from "./root";
const loginStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: colors.ui.background,
  },
  keyboard: {
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "600",
    color: colors.ui.textPrimary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 48,
    backgroundColor: colors.secondary[700],
    // subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: colors.ui.textPrimary,
    paddingVertical: 8,
  },
  eyeButton: {
    paddingLeft: 8,
    paddingVertical: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 2,
  },
  keepText: {
    fontSize: 12,
    fontStyle: "italic",
    color: colors.ui.textSecondary,
  },
  button: {
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.button.primary.bg,
    color: colors.button.primary.text,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.button.primary.text || "#fff",
  },
});
export default loginStyle