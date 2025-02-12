import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const linkButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderColor: colors.border.primary,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  label: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Add disabled state styles
  buttonDisabled: {
    backgroundColor: colors.disabled,
  },
  labelDisabled: {
    color: colors.text.secondary,
  },
});