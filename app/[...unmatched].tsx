import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { notFoundStyles } from '../styles/screens/notFoundStyles';
import { colors } from '../styles/common/colors';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={notFoundStyles.container}>
      <View style={notFoundStyles.imageContainer}>
        <Ionicons 
          name="alert-circle-outline" 
          size={120} 
          color={colors.primary} 
        />
      </View>

      <Text style={notFoundStyles.title}>Page Not Found</Text>
      
      <Text style={notFoundStyles.message}>
        Oops! The page you're looking for doesn't exist.{'\n'}
        Let's get you back on track.
      </Text>
    </View>
  );
}