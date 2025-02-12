import { StyleSheet } from 'react-native';

export const upcomingEventStyles = StyleSheet.create({
  container: {
    width: '95%',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderColor: "black",
    borderWidth: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    opacity: 0.07,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  eventRow: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  eventDate: {
    fontSize: 16,
    color: 'white',
    fontWeight: "bold",
    marginRight: 10,
    textAlign: 'left',
  },
  eventText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
  },
});