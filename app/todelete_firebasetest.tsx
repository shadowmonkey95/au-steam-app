import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function FirebaseTest() {
  const [testResults, setTestResults] = useState<string[]>([]);

  const addLog = (message: string) => {
    setTestResults(prev => [...prev, message]);
  };

  useEffect(() => {
    const testFirebase = async () => {
      try {
        // Test 1: Check if we can access the events collection
        addLog('Test 1: Accessing events collection...');
        const eventsRef = collection(db, 'events');
        addLog('✓ Successfully got events collection reference');

        // Test 2: Try to query with limit
        addLog('Test 2: Querying first document...');
        const q = query(collection(db, 'events'), limit(1));
        const querySnapshot = await getDocs(q);
        addLog(`Found ${querySnapshot.size} documents`);

        // Test 3: Log full details of first document if exists
        if (!querySnapshot.empty) {
          const firstDoc = querySnapshot.docs[0];
          addLog('First document data:');
          addLog(JSON.stringify(firstDoc.data(), null, 2));
        } else {
          addLog('No documents found in collection');
        }

      } catch (error) {
        addLog('❌ Error:');
        addLog(error instanceof Error ? error.message : 'Unknown error');
        console.error('Detailed error:', error);
      }
    };

    testFirebase();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Firebase Connection Tests
      </Text>
      
      {testResults.map((result, index) => (
        <Text key={index} style={{ marginBottom: 10 }}>
          {result}
        </Text>
      ))}
    </ScrollView>
  );
}