import React from 'react';
import { View, Text } from 'react-native';
import { Event } from '../../types/event';
import { eventCardStyles } from '../../styles/components/cards/eventCardStyles';
import { formatDate } from '../../utils/dateUtils';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <View style={eventCardStyles.container}>
      <Text style={eventCardStyles.title}>{event.name}</Text>
      <Text style={eventCardStyles.text}>{formatDate(event.date)}</Text>
      <Text style={eventCardStyles.text}>{event.description}</Text>
      <Text style={eventCardStyles.text}>{event.location}</Text>
    </View>
  );
};