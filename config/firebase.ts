import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// if (__DEV__) {
//   console.log('Firebase Config:', {
//     apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY?.substring(0, 5) + '...',
//     projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
//     authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   });
// }
// // Test function
// export const testFirebaseConnection = async () => {
//   try {
//     const testCollection = collection(db, 'test');
//     await getDocs(testCollection);
//     return { success: true, message: 'Firebase connection successful!' };
//   } catch (error) {
//     console.error('Firebase connection error:', error);
//     return { success: false, message: error.message };
//   }
// };