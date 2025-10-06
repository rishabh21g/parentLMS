import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userDetails, setuserDetails] = useState({
    name: "Logicknots",
    email: "logicknot@zohomail.in",
  });

  const [authToken, setauthToken] = useState("123456789");
  const [loading, setloading] = useState(false);
  const verifyAuthTokenandUser = async () => {
    setloading(true);
    try {
      const savedToken = await AsyncStorage.getItem("authToken");
      const savedUser = await AsyncStorage.getItem("userDetails");
      if (savedToken && savedUser) {
        setauthToken(savedToken);
        setuserDetails(JSON.parse(savedUser));
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Auth Error", "Invalid credentials, please relogin");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    verifyAuthTokenandUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setuserDetails,
        authToken,
        setauthToken,
        verifyAuthTokenandUser,
        loading,
        setloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
