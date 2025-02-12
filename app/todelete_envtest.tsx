import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function EnvTest() {
  const envVars = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY?.substring(0, 5) + '...',
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID?.substring(0, 5) + '...',
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Environment Variables Test
      </Text>
      {Object.entries(envVars).map(([key, value]) => (
        <View key={key} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{key}:</Text>
          <Text>{value || 'Not set'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}