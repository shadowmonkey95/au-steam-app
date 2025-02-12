import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';

export const testStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text.primary,
  },
  eventCard: {
    backgroundColor: colors.background.secondary,
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text.primary,
  },
  eventInfo: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 3,
  },
  loadingText: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 10,
  }
});