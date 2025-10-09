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

interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profilePicture?: string;
}

interface PerformanceStats {
  coverage: number;
  speed: number;
  accuracy: number;
  overallRating: number;
}

interface ApiResponse {
  user: UserProfile;
  performance: PerformanceStats;
}

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [performanceStats, setPerformanceStats] =
    useState<PerformanceStats | null>(null);

  const { width } = useWindowDimensions();
  const scale = width / 375;
  const normalize = (size: number) => Math.round(size * scale);

  // --- Components ---

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars: any[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      let iconName: keyof typeof MaterialIcons.glyphMap = "star-outline";
      if (i < fullStars) iconName = "star";
      else if (i === fullStars && hasHalfStar) iconName = "star-half";

      stars.push(
        <MaterialIcons
          key={i}
          name={iconName}
          size={normalize(22)}
          color={colors.warning}
        />
      );
    }

    return (
      <View
        style={[
          profileStyles.starContainer,
          { gap: normalize(3) }, // override gap dynamically
        ]}
      >
        {stars}
      </View>
    );
  };

  const PerformanceStat: React.FC<{
    label: string;
    value: number;
    icon: string;
  }> = ({ label, value, icon }) => (
    <View
      style={[
        profileStyles.statCard,
        { padding: normalize(18), borderRadius: normalize(10) },
      ]}
    >
      <MaterialIcons
        name={icon as any}
        size={normalize(26)}
        color={colors.primary[400]}
        style={profileStyles.statIcon}
      />
      <Text style={[profileStyles.statLabel, { fontSize: normalize(14) }]}>
        {label}
      </Text>
      <Text style={[profileStyles.statValue, { fontSize: normalize(22) }]}>
        {value}%
      </Text>
      <View style={profileStyles.progressBar}>
        <View style={[profileStyles.progressFill, { width: `${value}%` }]} />
      </View>
    </View>
  );

  // --- Fetch user data ---
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
    } catch (err) {
      Alert.alert("Error", "Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // --- Conditional UI ---
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

  // --- Main UI ---
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

          {/* Rating */}
          <View style={profileStyles.ratingSection}>
            <Text
              style={[profileStyles.ratingLabel, { fontSize: normalize(15) }]}
            >
              Overall Performance
            </Text>
            <View style={profileStyles.ratingContainer}>
              <StarRating rating={performanceStats.overallRating} />
              <Text
                style={[profileStyles.ratingValue, { fontSize: normalize(16) }]}
              >
                {performanceStats.overallRating.toFixed(1)}
              </Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View style={profileStyles.statsContainer}>
          <Text
            style={[profileStyles.sectionTitle, { fontSize: normalize(16) }]}
          >
            Performance Statistics
          </Text>
          <View style={profileStyles.statsGrid}>
            <PerformanceStat
              label="Coverage"
              value={performanceStats.coverage}
              icon="assessment"
            />
            <PerformanceStat
              label="Speed"
              value={performanceStats.speed}
              icon="speed"
            />
            <PerformanceStat
              label="Accuracy"
              value={performanceStats.accuracy}
              icon="check-circle"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
