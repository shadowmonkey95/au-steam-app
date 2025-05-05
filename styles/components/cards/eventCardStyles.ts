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
  statusButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  statusButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    minWidth: '28%',
    alignItems: 'center',
  },
  statusButtonText: {
    fontWeight: '500',
    fontSize: 14,
  }
});