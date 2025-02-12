import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { eventService } from '../services/eventService';
import { DASHBOARD_ITEMS } from '../constants/navigation';
import { UpcomingEventsSection } from '../components/sections/UpcomingEventsSection';
import { DashboardButton } from '../components/buttons/DashboardButton';
import { homeStyles } from '../styles/screens/homeStyles';
import type { Event } from '../types/event';
import type { AppRoutes } from '../types/navigation';

export default function Index() {
  const [recentEvents, setRecentEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 60) / 2;
  const buttonHeight = 120;
  const router = useRouter();

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

  // const handleNavigation = (route: string) => {
  //   if (route === 'index') {
  //     router.push('/');
  //   } else {
  //     router.push(`/${route}`);
  //   }
  // };

  const handleNavigation = (route: string) => {
    switch (route) {
      case 'studentInvolvement':
        router.push('/studentInvolvement' as const);
        break;
      case 'tutoringSupport':
        router.push('/tutoringSupport' as const);
        break;
      case 'internships':
        router.push('/internships' as const);
        break;
      case 'research':
        router.push('/research' as const);
        break;
      case 'scholarships':
        router.push('/scholarships' as const);
        break;
      case 'connect':
        router.push('/connect' as const);
        break;
      case 'upcomingEvents':
        router.push('/upcomingEvents' as const);
        break;
      default:
        router.push('/' as const);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={homeStyles.container}>
        <UpcomingEventsSection 
          events={recentEvents} 
          isLoading={isLoading}
          onPress={() => handleNavigation('upcomingEvents')}
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
              onPress={() => handleNavigation(item.route.replace('/', ''))}
            />
          ))}
        </View>
        {/* Add some bottom padding/spacing for better scrolling */}
        <View style={{ height: 100 }} />
      </View>
    </ScrollView>
  );
}