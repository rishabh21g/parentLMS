import { ApiResponse } from "@/types/api";
import { PerformanceStats } from "@/types/performanceStats";
import { UserProfile } from "@/types/user";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileStyles from "../../css/profile";
import colors from "../../css/root";

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [performanceStats, setPerformanceStats] =
    useState<PerformanceStats | null>(null);
  const { width } = useWindowDimensions();
  const scale = width / 375;
  const normalize = (size: number) => Math.round(size * scale);
  const fetchUserProfile = async (): Promise<void> => {
    try {
      setLoading(true);
      const dummyData: ApiResponse = {
        user: {
          id: "12345",
          fullName: "LogicKnots Student",
          email: "student@logicknots.com",
          phoneNumber: "+91 98765 43210",
        },
        performance: {
          coverage: 85,
          speed: 78,
          accuracy: 92,
          overallRating: 4.2,
        },
      };
      setUserProfile(dummyData.user);
      setPerformanceStats(dummyData.performance);
    } catch (err: unknown) {
      console.log(err);
      Alert.alert("Error", "Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);
  if (loading)
    return (
      <SafeAreaView style={profileStyles.container}>
        <View style={profileStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary[500]} />
          <Text style={profileStyles.loadingText}>Loading Profile...</Text>
        </View>
      </SafeAreaView>
    );

  if (!userProfile || !performanceStats)
    return (
      <SafeAreaView style={profileStyles.container}>
        <View style={profileStyles.errorContainer}>
          <MaterialIcons
            name="error-outline"
            size={normalize(48)}
            color={colors.danger}
          />
          <Text style={profileStyles.errorText}>Failed to load profile</Text>
        </View>
      </SafeAreaView>
    );
  return (
    <SafeAreaView style={profileStyles.container}>
      <ScrollView
        style={profileStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={profileStyles.header}>
          <Text
            style={[profileStyles.headerTitle, { fontSize: normalize(22) }]}
          >
            Student Profile
          </Text>
        </View>

        {/* Profile Card */}
        <View style={profileStyles.profileCard}>
          {/* Avatar */}
          <View style={profileStyles.profilePictureContainer}>
            {userProfile.profilePicture ? (
              <Image
                source={{ uri: userProfile.profilePicture }}
                style={[
                  profileStyles.profilePicture,
                  {
                    width: normalize(100),
                    height: normalize(100),
                    borderRadius: normalize(50),
                  },
                ]}
              />
            ) : (
              <View
                style={[
                  profileStyles.defaultAvatar,
                  {
                    width: normalize(100),
                    height: normalize(100),
                    borderRadius: normalize(50),
                  },
                ]}
              >
                <MaterialIcons
                  name="person"
                  size={normalize(60)}
                  color={colors.neutral[400]}
                />
              </View>
            )}
          </View>

          {/* User Info */}
          <View style={profileStyles.userInfo}>
            <Text style={[profileStyles.fullName, { fontSize: normalize(20) }]}>
              {userProfile.fullName}
            </Text>
            <Text style={[profileStyles.email, { fontSize: normalize(14) }]}>
              {userProfile.email}
            </Text>
            <Text
              style={[profileStyles.phoneNumber, { fontSize: normalize(14) }]}
            >
              {userProfile.phoneNumber}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
