import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { db } from '../config/firebase';

export default function ConfigCheck() {
  // Log the entire db object to check initialization
  console.log('Firestore instance:', db);
  
  // Get and display Firebase config
  const config = {
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY?.substring(0, 5) + '...', // Only show first 5 chars for security
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Firebase Config Check
      </Text>
      <Text style={{ marginBottom: 10 }}>Project ID: {config.projectId}</Text>
      <Text style={{ marginBottom: 10 }}>API Key: {config.apiKey}</Text>
      <Text style={{ marginBottom: 10 }}>Auth Domain: {config.authDomain}</Text>
      
      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>
        Check your console for more details
      </Text>
    </ScrollView>
  );
}