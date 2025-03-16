import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { UserProfile } from '../types/userProfile';

export const profileService = {
  // Get user profile
  getUserProfile: async (userId: string): Promise<UserProfile | null> => {
    try {
      const docRef = doc(db, 'userProfiles', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as UserProfile;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  },

  // Create user profile
  createUserProfile: async (userId: string, email: string, name: string): Promise<void> => {
    try {
      const defaultSteamMajors = {
        biology: false,
        chemistry: false,
        computerScience: false,
        dataScience: false,
        engineering: false,
        environmentalScience: false,
        gameDesign: false,
        mathematicsStatistics: false,
        neuroscience: false,
        physics: false,
      };

      const now = new Date().toISOString();
      
      await setDoc(doc(db, 'userProfiles', userId), {
        uid: userId,
        name,
        email,
        steamMajors: defaultSteamMajors,
        avatarUrl: 1, // Default to first avatar (numeric index)
        createdAt: now,
        updatedAt: now,
      });
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  },

  // Update user profile
  updateUserProfile: async (userId: string, data: Partial<UserProfile>): Promise<void> => {
    try {
      const updatedData = {
        ...data,
        updatedAt: new Date().toISOString(),
      };
      
      await updateDoc(doc(db, 'userProfiles', userId), updatedData);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  // Get current user profile
  getCurrentUserProfile: async (): Promise<UserProfile | null> => {
    const currentUser = auth.currentUser;
    if (!currentUser) return null;
    
    return await profileService.getUserProfile(currentUser.uid);
  },
};