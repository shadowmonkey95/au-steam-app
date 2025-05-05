import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useProfile } from '../../context/ProfileContext';
import { Event } from '../../types/event';
import { eventService } from '../../services/eventService';
import { colors } from '../../styles/common/colors';
import { formatDate } from '../../utils/dateUtils';
import { eventListStyles } from '../../styles/components/events/eventListStyles';

type EventWithStatus = Event & {
  status: 'going' | 'maybe' | 'skip';
};

interface EventListProps {
  initialFilter?: 'all' | 'going' | 'maybe';
}

export const EventList: React.FC<EventListProps> = ({ initialFilter = 'all' }) => {
  const { userProfile, updateProfile } = useProfile();
  const [events, setEvents] = useState<EventWithStatus[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventWithStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'going' | 'maybe'>(initialFilter);

  useEffect(() => {
    const loadEvents = async () => {
      if (!userProfile) return;
      
      setIsLoading(true);
      try {
        // Get all events
        const allEvents = await eventService.fetchEvents();
        
        // Map events with user's statuses
        const eventStatuses = userProfile.eventStatuses || {};
        
        const eventsWithStatus = allEvents
          .map(event => ({
            ...event,
            status: eventStatuses[event.id] as 'going' | 'maybe' | 'skip' || 'none'
          }));
        
        setEvents(eventsWithStatus);
        applyFilter(eventsWithStatus, activeFilter);
      } catch (error) {
        console.error('Error loading user events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, [userProfile]);

  const applyFilter = (eventsList: EventWithStatus[], filter: 'all' | 'going' | 'maybe') => {
    let filtered;
    
    if (filter === 'all') {
      filtered = eventsList;
    } else {
      filtered = eventsList.filter(event => event.status === filter);
    }
    
    setFilteredEvents(filtered);
  };

  const handleFilterChange = (filter: 'all' | 'going' | 'maybe') => {
    setActiveFilter(filter);
    applyFilter(events, filter);
  };

  const handleStatusChange = async (eventId: string, newStatus: 'going' | 'maybe' | 'skip') => {
    if (!userProfile) return;
    
    // Create a copy of existing event statuses or initialize if not present
    const updatedEventStatuses = {
      ...(userProfile.eventStatuses || {}),
      [eventId]: newStatus
    };
    
    // Update the profile with new event status
    await updateProfile({
      eventStatuses: updatedEventStatuses
    });
    
    // Update local state to avoid reloading
    const updatedEvents = events.map(event => 
      event.id === eventId 
        ? { ...event, status: newStatus } 
        : event
    );
    
    setEvents(updatedEvents);
    applyFilter(updatedEvents, activeFilter);
  };

  if (isLoading) {
    return (
      <View style={eventListStyles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={eventListStyles.container}>
      {/* Filter buttons */}
      <View style={eventListStyles.filterButtonsContainer}>
        <TouchableOpacity 
          style={[
            eventListStyles.filterButton, 
            activeFilter === 'all' ? eventListStyles.activeFilterButton : null
          ]}
          onPress={() => handleFilterChange('all')}
        >
          <Text 
            style={[
              eventListStyles.filterButtonText,
              activeFilter === 'all' ? eventListStyles.activeFilterButtonText : null
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            eventListStyles.filterButton, 
            activeFilter === 'going' ? eventListStyles.activeFilterButton : null
          ]}
          onPress={() => handleFilterChange('going')}
        >
          <Text 
            style={[
              eventListStyles.filterButtonText,
              activeFilter === 'going' ? eventListStyles.activeFilterButtonText : null
            ]}
          >
            Going
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            eventListStyles.filterButton, 
            activeFilter === 'maybe' ? eventListStyles.activeFilterButton : null
          ]}
          onPress={() => handleFilterChange('maybe')}
        >
          <Text 
            style={[
              eventListStyles.filterButtonText,
              activeFilter === 'maybe' ? eventListStyles.activeFilterButtonText : null
            ]}
          >
            Maybe
          </Text>
        </TouchableOpacity>
      </View>

      {filteredEvents.length === 0 ? (
        <View style={eventListStyles.emptyContainer}>
          <Text style={eventListStyles.emptyText}>
            {activeFilter === 'all' 
              ? "You don't have any events yet." 
              : activeFilter === 'going' 
                ? "You haven't marked any events as 'Going' yet."
                : "You haven't marked any events as 'Maybe' yet."
            }
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={eventListStyles.eventItem}>
              <Text style={eventListStyles.eventTitle}>{item.name}</Text>
              <Text style={eventListStyles.eventDate}>{formatDate(item.date)}</Text>
              <Text style={eventListStyles.eventLocation}>{item.location}</Text>
              
              {/* Display current status and allow changing */}
              <View style={eventListStyles.statusContainer}>
                <Text style={eventListStyles.statusLabel}>Status:</Text>
                
                <View style={eventListStyles.statusButtonsContainer}>
                  <TouchableOpacity 
                    style={[
                      eventListStyles.statusButton,
                      { 
                        backgroundColor: item.status === 'going' ? colors.success : 'transparent',
                        borderColor: colors.success
                      }
                    ]}
                    onPress={() => handleStatusChange(item.id, 'going')}
                  >
                    <Text 
                      style={[
                        eventListStyles.statusButtonText,
                        { color: item.status === 'going' ? colors.white : colors.success }
                      ]}
                    >
                      Going
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[
                      eventListStyles.statusButton,
                      { 
                        backgroundColor: item.status === 'maybe' ? colors.info : 'transparent',
                        borderColor: colors.info
                      }
                    ]}
                    onPress={() => handleStatusChange(item.id, 'maybe')}
                  >
                    <Text 
                      style={[
                        eventListStyles.statusButtonText,
                        { color: item.status === 'maybe' ? colors.white : colors.info }
                      ]}
                    >
                      Maybe
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[
                      eventListStyles.statusButton,
                      { 
                        backgroundColor: item.status === 'skip' ? colors.danger : 'transparent',
                        borderColor: colors.danger
                      }
                    ]}
                    onPress={() => handleStatusChange(item.id, 'skip')}
                  >
                    <Text 
                      style={[
                        eventListStyles.statusButtonText,
                        { color: item.status === 'skip' ? colors.white : colors.danger }
                      ]}
                    >
                      Skip
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={eventListStyles.listContainer}
        />
      )}
    </View>
  );
};