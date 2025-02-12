import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { eventService } from '../services/eventService';
import { DASHBOARD_ITEMS } from '../constants/navigation';
import { UpcomingEventsSection } from '../components/sections/UpcomingEventsSection';
import { DashboardButton } from '../components/buttons/DashboardButton';
import { homeStyles } from '../styles/screens/homeStyles';
import type { Event } from '../types/event';
import { useAppNavigation } from '../utils/navigation';

export default function Index() {
  const [recentEvents, setRecentEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 60) / 2;
  const buttonHeight = 120;
  const navigate = useAppNavigation();

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        const events = await eventService.fetchUpcomingEvents(2);
        setRecentEvents(events);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadEvents();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={homeStyles.container}>
        <UpcomingEventsSection 
          events={recentEvents} 
          isLoading={isLoading}
          onPress={() => navigate('upcomingEvents')}
        />

        <View style={homeStyles.grid}>
          {DASHBOARD_ITEMS.map((item) => (
            <DashboardButton
              key={item.route}
              width={buttonWidth}
              height={buttonHeight}
              text={item.label}
              backgroundImage={item.image}
              transparency={0.25}
              backgroundColor={item.backgroundColor}
              onPress={() => navigate(item.route.replace('/', ''))}
            />
          ))}
        </View>
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
  );
}