import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';

export const tutoringStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.07,
  },
  container: {
    flex: 1,
    padding: 30,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  subText: {
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 8,
    lineHeight: 22,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 12,
    paddingTop: 30,
  },
  emphasisText: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: "left",
    marginVertical: 6,
  },
  infoBox: {
    backgroundColor: colors.background.secondary,
    padding: 16,
    marginVertical: 12,
    borderRadius: 8,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
  infoBoxTopText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 8,
  },
  infoBoxBottomText: {
    fontSize: 14,
    color: colors.primary,
  },
  bottomSpacing: {
    height: 140,
  }
});