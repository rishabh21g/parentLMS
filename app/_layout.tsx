import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar
        barStyle={"dark-content"}
        translucent={false}
        animated={true}
        networkActivityIndicatorVisible={true}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
      </Stack>
    </AuthProvider>
  );
}
