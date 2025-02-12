import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Event } from '../types/event';
import { eventService } from '../services/eventService';
import { EventCard } from '../components/cards/EventCard';
import { upcomingEventsStyles } from '../styles/screens/upcomingEventsStyles';
import { colors } from '../styles/common/colors';

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [markedDates, setMarkedDates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        const fetchedEvents = await eventService.fetchEvents();
        setEvents(fetchedEvents);
        setMarkedDates(eventService.createMarkedDates(fetchedEvents));
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleDayPress = (day: { dateString: string }) => {
    const eventIndex = events.findIndex(event => event.date === day.dateString);
    if (eventIndex !== -1 && scrollViewRef.current) {
      const eventOffset = eventIndex * 120;
      scrollViewRef.current.scrollTo({ y: eventOffset + 200, animated: true });
    }
  };

  if (isLoading) {
    return (
      <View style={upcomingEventsStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require("../assets/images/research.jpg")}
      style={upcomingEventsStyles.background}
      imageStyle={upcomingEventsStyles.backgroundImage}
    >
      <ScrollView 
        style={upcomingEventsStyles.container} 
        ref={scrollViewRef}
      >
        <Text style={upcomingEventsStyles.title}>Upcoming Events</Text>

        <View style={upcomingEventsStyles.calendar}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={markedDates}
            theme={{
              todayTextColor: colors.primary,
              selectedDayBackgroundColor: colors.primary,
              dotColor: colors.primary,
              arrowColor: colors.primary,
              monthTextColor: colors.primary,
              textMonthFontWeight: 'bold',
              textDayFontSize: 14,
              textMonthFontSize: 16,
            }}
          />
        </View>

        <View style={upcomingEventsStyles.eventsList}>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </View>

        <View style={upcomingEventsStyles.bottomSpacing} />
      </ScrollView>
    </ImageBackground>
  );
}