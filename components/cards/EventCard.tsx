import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Event } from '../../types/event';
import { eventCardStyles } from '../../styles/components/cards/eventCardStyles';
import { formatDate } from '../../utils/dateUtils';
import { useProfile } from '../../context/ProfileContext';
import { colors } from '../../styles/common/colors';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { userProfile, updateProfile } = useProfile();
  
  // Get current event status from user profile
  const eventStatus = userProfile?.eventStatuses?.[event.id] || 'none';
  
  const handleStatusChange = async (status: 'going' | 'maybe' | 'skip') => {
    if (!userProfile) return;
    
    // Create a copy of existing event statuses or initialize if not present
    const updatedEventStatuses = {
      ...(userProfile.eventStatuses || {}),
      [event.id]: status
    };
    
    // Update the profile with new event status
    await updateProfile({
      eventStatuses: updatedEventStatuses
    });
  };
  
  // Determine button styles based on current status
  const getButtonStyle = (status: string) => {
    return [
      eventCardStyles.statusButton,
      { 
        backgroundColor: eventStatus === status 
          ? status === 'going' ? colors.success 
            : status === 'maybe' ? colors.info 
            : colors.danger
          : 'transparent',
        borderColor: status === 'going' ? colors.success 
          : status === 'maybe' ? colors.info 
          : colors.danger
      }
    ];
  };
  
  const getTextStyle = (status: string) => {
    return [
      eventCardStyles.statusButtonText,
      { 
        color: eventStatus === status 
          ? colors.white 
          : status === 'going' ? colors.success 
            : status === 'maybe' ? colors.info 
            : colors.danger
      }
    ];
  };

  return (
    <View style={eventCardStyles.container}>
      <Text style={eventCardStyles.title}>{event.name}</Text>
      <Text style={eventCardStyles.text}>{formatDate(event.date)}</Text>
      <Text style={eventCardStyles.text}>{event.description}</Text>
      <Text style={eventCardStyles.text}>{event.location}</Text>
      
      {/* Status Buttons */}
      <View style={eventCardStyles.statusButtonsContainer}>
        <TouchableOpacity 
          style={getButtonStyle('going')}
          onPress={() => handleStatusChange('going')}
        >
          <Text style={getTextStyle('going')}>Going</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={getButtonStyle('maybe')}
          onPress={() => handleStatusChange('maybe')}
        >
          <Text style={getTextStyle('maybe')}>Maybe</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={getButtonStyle('skip')}
          onPress={() => handleStatusChange('skip')}
        >
          <Text style={getTextStyle('skip')}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};