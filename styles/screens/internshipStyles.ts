import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';

export const internshipStyles = StyleSheet.create({
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
    fontFamily: "Glegoo-Bold",
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
  imageTextContainer: {
    flexDirection: "row",
    marginVertical: 16,
    alignItems: "center",
  },
  squareImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  imageText: {
    fontSize: 16,
    textAlign: "left",
    flex: 1,
  },
  emphasisText: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: "left",
    marginVertical: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  imageButton: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buttonImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  bottomSpacing: {
    height: 140,
  }
});