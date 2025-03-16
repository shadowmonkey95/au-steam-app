import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { profileStyles } from '../../styles/screens/profileStyles';
import { useProfile } from '../../context/ProfileContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { getAvatarSource } from '../../constants/avatarConstants';

export const HeaderAvatar: React.FC = () => {
  const { userProfile } = useProfile();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace('/sign-in');
    } catch (error: any) {
      console.error('Error signing out:', error);
    }
  };

  const navigateToProfile = () => {
    setShowDropdown(false);
    router.push('/profile');
  };

  return (
    <View style={profileStyles.headerAvatarContainer}>
      <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
        <Image 
          source={getAvatarSource(userProfile?.avatarUrl)}
          style={profileStyles.headerAvatar} 
        />
      </TouchableOpacity>

      {/* Dropdown menu */}
      {showDropdown && (
        <View style={profileStyles.dropdown}>
          <TouchableOpacity 
            style={profileStyles.dropdownItem}
            onPress={navigateToProfile}
          >
            <Ionicons name="person-outline" size={16} color="#333" />
            <Text style={profileStyles.dropdownItemText}>Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={profileStyles.dropdownItem}
            onPress={handleSignOut}
          >
            <Ionicons name="log-out-outline" size={16} color="#333" />
            <Text style={profileStyles.dropdownItemText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};