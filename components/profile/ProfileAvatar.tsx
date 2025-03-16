import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, ScrollView, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { profileStyles } from '../../styles/screens/profileStyles';
import { useProfile } from '../../context/ProfileContext';
import { DEFAULT_AVATARS, getAvatarSource } from '../../constants/avatarConstants';

interface ProfileAvatarProps {
  editable?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ editable = true }) => {
  const { userProfile, updateProfile } = useProfile();
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Handle avatar selection from defaults
  const handleSelectAvatar = async (avatarIndex: number) => {
    try {
      await updateProfile({ avatarUrl: avatarIndex as unknown as string });
      setShowAvatarSelector(false);
    } catch (error: any) {
      console.error('Failed to update avatar:', error);
      Alert.alert('Error', 'Failed to update avatar');
    }
  };

  // Pick image from device - stubbed out since not using Storage
  const pickImage = async () => {
    try {
      // Request permissions
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'We need permission to access your photos');
          return;
        }
      }

      // Show default avatars
      setShowAvatarSelector(true);
      
      // TO DO: Custom avatar upload, add that code here
    } catch (error: any) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  // Avatar options menu
  // TO DO: uncomment this and try firebase storage
  // const showAvatarOptions = () => {
  //   if (Platform.OS === 'web') {
  //     // On web, just show avatar selector
  //     setShowAvatarSelector(true);
  //   } else {
  //     // On mobile, show options dialog
  //     Alert.alert(
  //       'Change Profile Picture',
  //       'Choose an option',
  //       [
  //         {
  //           text: 'Choose from Library',
  //           onPress: pickImage,
  //         },
  //         {
  //           text: 'Use Default Avatar',
  //           onPress: () => setShowAvatarSelector(true),
  //         },
  //         {
  //           text: 'Cancel',
  //           style: 'cancel',
  //         },
  //       ]
  //     );
  //   }
  // };
  const showAvatarOptions = () => {
    setShowAvatarSelector(true);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Image 
        source={getAvatarSource(userProfile?.avatarUrl)}
        style={profileStyles.avatar} 
      />
      
      {editable && (
        <TouchableOpacity 
          style={profileStyles.imagePickerButton}
          onPress={showAvatarOptions}
          disabled={isUploading}
        >
          {isUploading ? (
            <Ionicons name="hourglass" size={24} color="#fff" />
          ) : (
            <Ionicons name="camera" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      )}

      {/* Avatar selector modal */}
      <Modal
        visible={showAvatarSelector}
        transparent
        animationType="fade"
      >
        <View style={profileStyles.avatarSelector}>
          <Text style={profileStyles.avatarSelectorTitle}>Choose Avatar</Text>
          
          <ScrollView>
            <View style={profileStyles.avatarGrid}>
              {DEFAULT_AVATARS.map((avatar, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectAvatar(index + 1)}
                >
                  <Image 
                    source={avatar}
                    style={[
                      profileStyles.avatarOption,
                      typeof userProfile?.avatarUrl === 'number' && 
                      userProfile?.avatarUrl === index + 1 && 
                      profileStyles.selectedAvatar
                    ]} 
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          
          <TouchableOpacity 
            style={profileStyles.closeButton}
            onPress={() => setShowAvatarSelector(false)}
          >
            <Text style={profileStyles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};