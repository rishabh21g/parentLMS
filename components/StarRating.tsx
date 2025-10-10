import profileStyles from "@/css/profile";
import colors from "@/css/root";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useWindowDimensions, View } from "react-native";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const { width } = useWindowDimensions();
  const stars: any[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const scale = width / 375;
  const normalize = (size: number) => Math.round(size * scale);

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
        { gap: normalize(3) }, 
      ]}
    >
      {stars}
    </View>
  );
};

export default StarRating;
