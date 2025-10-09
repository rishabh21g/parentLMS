import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
import styles from "@/css/login";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import colors from "../css/root";
import { validateInputsLog } from "../utils/inputChecker";

const Login = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  // types
  type UserDetails = {
    email: string;
    passsword: string;
    userId: string;
  };
  // handle login dummy code
  const handleLogin = async (): Promise<void> => {
    setloading(true);
    try {
      const token: string = "hfiudshfuidhfuieh2734877";
      const userDetails: UserDetails = {
        email: email,
        passsword: password,
        userId: uuid.v4(),
      };

      if (token) {
        // Update Local Storage
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
        Alert.alert("Login Successfully");
        router.push("/(main)/home");
      }
      setemail("");
      setpassword("");
    } catch (err: unknown) {
      Alert.alert("Login failed");
      console.log("Error while logging in", err);
    } finally {
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={50}
        style={styles.keyboard}
      >
        {/* Logo / Title */}
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Login to your account</Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={22} color={colors.primary[400]} />
          <TextInput
            placeholder="Enter your email"
            onChangeText={(text: string): void => setemail(text.trim())}
            value={email}
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={colors.neutral[200]}
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={22} color={colors.primary[400]} />
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text: string): void => setpassword(text)}
            style={styles.input}
            placeholderTextColor={colors.neutral[200]}
          />
          <TouchableOpacity
            onPress={(): void => setShowPassword(!showPassword)}
            style={styles.eyeButton}
            accessibilityLabel={
              showPassword ? "Hide password" : "Show password"
            }
          >
            <MaterialIcons
              name={!showPassword ? "visibility-off" : "visibility"}
              size={22}
              color={colors.primary[400]}
            />
          </TouchableOpacity>
        </View>

        {/* Keep me logged in */}
        <View style={styles.row}>
          <Text style={styles.keepText}>Keep me logged in</Text>
        </View>

        {/* Login Button */}
        <Pressable
          disabled={loading}
          style={({ pressed }) => [
            styles.button,
            loading && styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            const checkResult = validateInputsLog(email, password);
            if (checkResult) handleLogin();
          }}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
