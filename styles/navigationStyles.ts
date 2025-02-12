import { StyleSheet } from 'react-native';
import { colors } from './common/colors';

export const navigationStyles = StyleSheet.create({
  header: {
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: colors.primary,
    paddingBottom: 10,
  },
});