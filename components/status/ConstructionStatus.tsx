import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { constructionStyles } from '../../styles/screens/constructionStyles';
import { colors } from '../../styles/common/colors';

interface ConstructionStatusProps {
  title?: string;
  subtitle?: string;
}

export const ConstructionStatus: React.FC<ConstructionStatusProps> = ({
  title = 'Under Construction',
  subtitle = 'This section is coming soon',
}) => {
  return (
    <View style={constructionStyles.contentContainer}>
      <Ionicons 
        name="construct" 
        size={64} 
        color={colors.secondary}
        style={constructionStyles.icon}
      />
      <Text style={constructionStyles.title}>{title}</Text>
      <Text style={constructionStyles.subtitle}>{subtitle}</Text>
    </View>
  );
};