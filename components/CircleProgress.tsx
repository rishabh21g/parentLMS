import colors from "@/css/root";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CircleProgress: React.FC<{
  percentage: number;
  color: string;
  label: string;
  icon: React.ReactElement;
}> = ({ percentage, color, label ,icon }) => {
  // Circle dimensions
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth ) / 2; 
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View  style={{ alignItems: "center", margin: 10 , alignContent:"center"}}>
      {/* Circle */}
      <View >
        <Svg width={size} height={size}>
          {/* Background track */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors.neutral[700]}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress arc */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </Svg>

        {/* Percentage text in center */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.ui.textPrimary,
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            {percentage}%
          </Text>
        </View>
      </View>

      {/* Label below circle */}
      <View style={{ alignItems: "center", marginTop: 8 }}>
        <View style={{ alignItems: "center", flexDirection: "row", gap:10 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.ui.textSecondary,
            }}
          >
            {label}
          </Text>
          {icon}
        </View>
      </View>
    </View>
  );
};

export default CircleProgress;
