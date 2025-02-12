import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';

export const upcomingEventsStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    opacity: 0.07,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.text.primary,
  },
  calendar: {
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  eventsList: {
    marginTop: 20,
  },
  bottomSpacing: {
    height: 100,
  }
});