import { StyleSheet, Platform } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    ...(Platform.OS !== 'web' && {
      padding: 10,
    }),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
});

// TO DO - style the web, move dynamic button to here
// import { StyleSheet, Platform, Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// export const homeStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     ...(Platform.OS !== 'web' && {
//       padding: 10,
//       marginTop: 40,
//     }),
//   },
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//     ...Platform.select({
//       web: {
//         paddingHorizontal: '10%', // Add some padding on web for better layout
//       },
//     }),
//   },
// });

// // Get dynamic button dimensions based on platform
// export const getButtonDimensions = () => {
//   return Platform.select({
//     web: {
//       width: '30%',        // Take up roughly a third of the space (3 per row)
//       height: 180,         // Taller buttons on web
//     },
//     default: {
//       width: (screenWidth - 60) / 2,  // Keep existing mobile layout (2 per row)
//       height: 120,
//     },
//   });
// };