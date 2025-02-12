import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { testStyles } from '../styles/screens/toDelete_testStyles';
import { colors } from '../styles/common/colors';

interface TestEvent {
  name: string;
  date: string;
  description: string;
  location: string;
}

export default function TestScreen() {
  const [events, setEvents] = useState<TestEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Log that we're starting the fetch
        console.log('Starting to fetch events...');
        
        const querySnapshot = await getDocs(collection(db, 'events'));
        
        // Log the raw query snapshot
        console.log('Query snapshot:', querySnapshot.size, 'documents found');
        
        const eventsList = querySnapshot.docs.map(doc => {
          // Log each document data
          console.log('Document data:', doc.data());
          return doc.data() as TestEvent;
        });
        
        setEvents(eventsList);
        console.log('Events successfully fetched:', eventsList.length);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err instanceof Error ? err.message : 'An error occurred fetching events');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <View style={[testStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={testStyles.loadingText}>Loading events...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[testStyles.container, { justifyContent: 'center' }]}>
        <Text style={testStyles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={testStyles.container}>
      <Text style={testStyles.title}>Test Firebase Connection</Text>
      
      {events.length === 0 ? (
        <Text style={testStyles.eventInfo}>No events found</Text>
      ) : (
        events.map((event, index) => (
          <View key={index} style={testStyles.eventCard}>
            <Text style={testStyles.eventName}>{event.name}</Text>
            <Text style={testStyles.eventInfo}>Date: {event.date}</Text>
            <Text style={testStyles.eventInfo}>Location: {event.location}</Text>
            <Text style={testStyles.eventInfo}>{event.description}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}