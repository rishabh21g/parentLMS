import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Login from "../components/Login";
import colors from "../css/root";
export default function Index() {
  const router = useRouter();
  const { authToken, loading } = useAuth();

  //check token
  useEffect(() => {
    if (!loading) {
      if (authToken) {
        router.replace("/(main)/home");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken, loading]);

  // laoding state ui
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary[400]} />
      </View>
    );
  }
  return <Login />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.ui.background,
  },
});
