import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from 'firebase/auth';
import { profileService } from '../services/profileService';
import { UserProfile } from '../types/userProfile';
import { auth } from '../config/firebase';

interface ProfileContextType {
  userProfile: UserProfile | null;
  isProfileLoading: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  const loadUserProfile = async (user: User | null) => {
    if (!user) {
      setUserProfile(null);
      setIsProfileLoading(false);
      return;
    }

    setIsProfileLoading(true);
    try {
      let profile = await profileService.getUserProfile(user.uid);
      
      // If profile doesn't exist, create a new one
      if (!profile) {
        const name = user.displayName || 'New User';
        await profileService.createUserProfile(user.uid, user.email || '', name);
        profile = await profileService.getUserProfile(user.uid);
      }
      
      setUserProfile(profile);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setIsProfileLoading(false);
    }
  };

  // Load profile when auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      loadUserProfile(user);
    });

    return unsubscribe;
  }, []);

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!userProfile) return;
    
    try {
      await profileService.updateUserProfile(userProfile.uid, data);
      await refreshProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  const refreshProfile = async () => {
    if (!auth.currentUser) return;
    
    try {
      const profile = await profileService.getUserProfile(auth.currentUser.uid);
      setUserProfile(profile);
    } catch (error) {
      console.error('Error refreshing profile:', error);
    }
  };

  return (
    <ProfileContext.Provider value={{ 
      userProfile, 
      isProfileLoading, 
      updateProfile,
      refreshProfile
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}