import profileStyles from "@/css/profile";
import colors from "@/css/root";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text } from "@react-navigation/elements";
import { useWindowDimensions, View } from "react-native";

const PerformanceStat: React.FC<{
  label: string;
  value: number;
  icon: string;
}> = ({ label, value, icon }) => {
  const { width } = useWindowDimensions();
  const scale = width / 375;
  const normalize = (size: number) => Math.round(size * scale);
  return (
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
};

export default PerformanceStat;
