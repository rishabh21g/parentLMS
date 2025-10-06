import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

interface UserDetails {
  name: string;
  email: string;
}

interface AuthContextType {
  userDetails: UserDetails | null;
  setuserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  authToken: string | null;
  setauthToken: React.Dispatch<React.SetStateAction<string | null>>;
  verifyAuthTokenandUser: () => Promise<void>;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with proper default value
const AuthContext = createContext<AuthContextType | null>(null);

// Create custom hook with type safety
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

//  Define props type for provider
interface AuthProviderProps {
  children: ReactNode;
}

//  Implement provider with typed state
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userDetails, setuserDetails] = useState<UserDetails | null>({
    name: "Logicknots",
    email: "logicknot@zohomail.in",
  });

  const [authToken, setauthToken] = useState<string | null>("123456789");
  const [loading, setloading] = useState<boolean>(false);

  const verifyAuthTokenandUser = async (): Promise<void> => {
    setloading(true);
    try {
      const savedToken = await AsyncStorage.getItem("authToken");
      const savedUser = await AsyncStorage.getItem("userDetails");

      if (savedToken && savedUser) {
        setauthToken(savedToken);
        setuserDetails(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error(err);
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
