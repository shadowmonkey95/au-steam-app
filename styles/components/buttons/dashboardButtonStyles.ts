import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const dashboardButtonStyles = StyleSheet.create({
  button: {
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    borderColor: "black",
    borderWidth: 1,
  },
  backgroundColorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    zIndex: 0,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 0,
  },
  buttonText: {
    position: 'absolute',
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 10,
    bottom: 0,
    paddingBottom: 15,
    fontSize: 20,
    zIndex: 10,
  },
});