import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { Event, MarkedDates } from '../types/event';

export const eventService = {
  fetchEvents: async (): Promise<Event[]> => {
    try {
      if (!auth.currentUser) {
        return [];
      }
      
      const querySnapshot = await getDocs(collection(db, 'events'));
      return querySnapshot.docs.map(doc => doc.data() as Event);
    } catch (error) {
      // Only log error if user is authenticated (otherwise it's expected)
      if (auth.currentUser) {
        console.error('Error fetching events:', error);
      }
      return [];
    }
  },

  fetchUpcomingEvents: async (limitCount: number): Promise<Event[]> => {
    try {
      if (!auth.currentUser) {
        return [];
      }
      
      const eventsQuery = query(
        collection(db, 'events'),
        orderBy('date', 'asc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(eventsQuery);
      return querySnapshot.docs.map(doc => doc.data() as Event);
    } catch (error) {
      // Only log error if user is authenticated (otherwise it's expected)
      if (auth.currentUser) {
        console.error('Error fetching upcoming events:', error);
      }
      return [];
    }
  },

  createMarkedDates: (events: Event[]): MarkedDates => {
    const markedDates: MarkedDates = {};
    events.forEach((event) => {
      markedDates[event.date] = {
        marked: true,
        dotColor: '#27418b',
      };
    });
    return markedDates;
  }
};

export { Event };