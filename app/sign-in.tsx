import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'expo-router';
import { authStyles } from '../styles/screens/authStyles';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await signInWithEmailAndPassword(auth, email, password);
      // Navigation will be handled by root layout
    } catch (error: any) {
      console.error(error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  // Only use TouchableWithoutFeedback on mobile platforms
  const renderContent = () => (
    <View style={authStyles.container}>
      <View style={authStyles.innerContainer}>
        <Text style={authStyles.title}>Welcome Back</Text>

        {/* Field labels for better clarity */}
        <Text style={authStyles.fieldLabel}>Email</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={authStyles.fieldLabel}>Password</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error ? <Text style={authStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity 
          style={authStyles.button} 
          onPress={handleSignIn}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={authStyles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/sign-up')}>
          <Text style={authStyles.linkText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Use TouchableWithoutFeedback only on mobile platforms
  if (Platform.OS !== 'web') {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {renderContent()}
      </TouchableWithoutFeedback>
    );
  }

  // On web, return the content directly without TouchableWithoutFeedback
  return renderContent();
}