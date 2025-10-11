import colors from "@/css/root";
import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircleProgressProps {
  percentage: number;
  color: string;
  label: string;
  icon: React.ReactElement;
  size: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  percentage,
  color,
  label,
  icon,
  size,
}) => {
  const { width } = useWindowDimensions();

  // Responsive scaling
  const scale = width < 360 ? 0.8 : width < 420 ? 0.9 : 1;
  const circleSize = size * scale;
  const strokeWidth = 10 * scale;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const fontSize = 20 * scale;
  const labelFontSize = 15 * scale;

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 12 * scale,
        marginHorizontal: 8 * scale,
      }}
    >
      {/* Circular progress */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Svg width={circleSize} height={circleSize}>
          {/* Background circle */}
          <Circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke={colors.neutral[600]}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Foreground progress arc */}
          <Circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
          />
        </Svg>

        {/* Center text */}
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
              fontSize,
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            {percentage}%
          </Text>
        </View>
      </View>

      {/* Label + icon below circle */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10 * scale,
          flexDirection: "row",
          gap: 6 * scale,
          flexWrap: "wrap",
        }}
      >
        <Text
          style={{
            fontSize: labelFontSize,
            fontWeight: "800",
            color: colors.ui.textSecondary,
            textAlign: "center",
          }}
        >
          {label}
        </Text>
        {icon}
      </View>
    </View>
  );
};

export default CircleProgress;
