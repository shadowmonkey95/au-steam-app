import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { profileStyles } from '../../styles/screens/profileStyles';
import { useProfile } from '../../context/ProfileContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { getAvatarSource } from '../../constants/avatarConstants';
import { EventList } from '../events/EventList';
import { colors } from '../../styles/common/colors';

export const HeaderAvatar: React.FC = () => {
  const { userProfile } = useProfile();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEventList, setShowEventList] = useState(false);
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

  const showMyEvents = () => {
    setShowEventList(true);
    setShowDropdown(false);
  };

  const closeEventList = () => {
    setShowEventList(false);
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

          {/* Only show one My Events option */}
          <TouchableOpacity 
            style={profileStyles.dropdownItem}
            onPress={showMyEvents}
          >
            <Ionicons name="calendar-outline" size={16} color="#333" />
            <Text style={profileStyles.dropdownItemText}>My Events</Text>
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

      {/* Events Modal */}
      <Modal
        visible={showEventList}
        transparent={true}
        animationType="slide"
        onRequestClose={closeEventList}
      >
        <View style={profileStyles.modalContainer}>
          <View style={profileStyles.modalContent}>
            <View style={profileStyles.modalHeader}>
              <Text style={profileStyles.modalTitle}>My Events</Text>
              <TouchableOpacity onPress={closeEventList} style={profileStyles.closeButton}>
                <Text style={profileStyles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>
            <EventList />
          </View>
        </View>
      </Modal>
    </View>
  );
};