import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { testFirebaseConnection } from '../config/firebase';

export default function Home() {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    try {
      const result = await testFirebaseConnection();
      setTestResult(result.message);
    } catch (error) {
      setTestResult('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AU STEAM App</Text>
      <Text style={styles.subtitle}>Your hub for events, volunteering, and internships</Text>
      
      <TouchableOpacity 
        style={styles.testButton} 
        onPress={testConnection}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Testing...' : 'Test Firebase Connection'}
        </Text>
      </TouchableOpacity>

      {testResult ? (
        <Text style={[
          styles.testResult, 
          { color: testResult.includes('Error') ? '#dc2626' : '#16a34a' }
        ]}>
          {testResult}
        </Text>
      ) : null}
      
      <View style={styles.linksContainer}>
        <Link href="/events" style={styles.link}>Events</Link>
        <Link href="/volunteering" style={styles.link}>Volunteering</Link>
        <Link href="/internships" style={styles.link}>Internships</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  testButton: {
    backgroundColor: '#f4511e',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  testResult: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  linksContainer: {
    marginTop: 20,
    gap: 10,
  },
  link: {
    fontSize: 16,
    color: '#f4511e',
    textDecorationLine: 'underline',
  }
});