import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';

export const studentInvolvementStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.text.primary,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'left',
    color: colors.text.secondary,
    lineHeight: 24,
  },
});