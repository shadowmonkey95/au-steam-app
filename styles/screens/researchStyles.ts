import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';

export const researchStyles = StyleSheet.create({
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
    paddingTop: 20,
  },
  emphasisText: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: "left",
    marginVertical: 6,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
    marginVertical: 8,
    lineHeight: 22,
  },
  tipContainer: {
    marginVertical: 8,
  },
  departmentLinksContainer: {
    marginVertical: 16,
  },
  bottomSpacing: {
    height: 140,
  }
});