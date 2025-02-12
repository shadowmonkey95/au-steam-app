import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const eventCardStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.secondary,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    color: colors.text.primary,
  },
  text: {
    fontSize: 14,
    lineHeight: 25,
    color: colors.text.secondary,
  },
});

// styles/screens/upcomingEventsStyles.ts
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
  }
});