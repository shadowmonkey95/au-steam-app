import React from 'react';
import { View, Text } from 'react-native';
import { tutoringStyles } from '../../styles/screens/tutoringStyles';

interface ScheduleBoxProps {
  day: string;
  time: string;
}

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({ day, time }) => {
  return (
    <View style={tutoringStyles.infoBox}>
      <Text style={tutoringStyles.infoBoxTopText}>{day}</Text>
      <Text style={tutoringStyles.infoBoxBottomText}>{time}</Text>
    </View>
  );
};