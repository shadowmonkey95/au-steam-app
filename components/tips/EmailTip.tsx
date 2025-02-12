import React from 'react';
import { View, Text } from 'react-native';
import { researchStyles } from '../../styles/screens/researchStyles';

interface EmailTipProps {
  title: string;
  content: string;
}

export const EmailTip: React.FC<EmailTipProps> = ({ title, content }) => {
  return (
    <View style={researchStyles.tipContainer}>
      <Text style={researchStyles.boldText}>★ {title}</Text>
      <Text style={researchStyles.subText}>{content}</Text>
    </View>
  );
};