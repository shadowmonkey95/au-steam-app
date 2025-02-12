import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';
import { dashboardButtonStyles } from '../../styles/components/buttons/dashboardButtonStyles';
import { colors } from '../../styles/common/colors';

interface DashboardButtonProps {
  text: string;
  backgroundImage: ImageSourcePropType;
  width: number;
  height: number;
  onPress: () => void;
  transparency?: number;
  backgroundColor?: string;
}

export const DashboardButton: React.FC<DashboardButtonProps> = ({
  text,
  backgroundImage,
  width,
  height,
  onPress,
  transparency = 0.20,
  backgroundColor = colors.primary,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        dashboardButtonStyles.button, 
        { width, height }
      ]}
    >
      <View
        style={[
          dashboardButtonStyles.backgroundColorContainer,
          { backgroundColor, width, height },
        ]}
      />
      <ImageBackground
        source={backgroundImage}
        style={[
          dashboardButtonStyles.backgroundImage, 
          { opacity: transparency, width, height }
        ]}
      />
      <Text style={dashboardButtonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default DashboardButton;