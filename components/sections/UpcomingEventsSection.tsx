import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Event } from '../../services/eventService';
import { formatDate } from '../../utils/dateUtils';
import { upcomingEventStyles } from '../../styles/components/sections/upcomingEventStyles';

interface UpcomingEventsSectionProps {
  events: Event[];
  isLoading: boolean;
  onPress: () => void;
}

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({ 
  events,
  isLoading,
  onPress
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={upcomingEventStyles.container}
      onPress={() => router.push("/upcomingEvents")}
    >
      <ImageBackground
        source={require('../../assets/images/events.png')}
        style={upcomingEventStyles.backgroundImage}
        imageStyle={upcomingEventStyles.backgroundImageStyle}
      >
        <Text style={upcomingEventStyles.title}>Upcoming Events</Text>
        {events.length > 0 ? (
          <>
            <View style={[upcomingEventStyles.eventRow, { backgroundColor: 'rgba(192, 61, 62, 0.75)' }]}>
              <Text style={upcomingEventStyles.eventDate}>{formatDate(events[0]?.date)}</Text>
              <Text style={upcomingEventStyles.eventText}>{events[0]?.name}</Text>
            </View>
            {events[1] && (
              <View style={[upcomingEventStyles.eventRow, { backgroundColor: 'rgba(39, 65, 139, 0.75)' }]}>
                <Text style={upcomingEventStyles.eventDate}>{formatDate(events[1]?.date)}</Text>
                <Text style={upcomingEventStyles.eventText}>{events[1]?.name}</Text>
              </View>
            )}
          </>
        ) : (
          <Text style={upcomingEventStyles.eventText}>No events available</Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};