import React from 'react';
import { View, TouchableOpacity, Image, Linking } from 'react-native';
import { internshipStyles } from '../../styles/screens/internshipStyles';

interface StoreButtonsProps {
  appStoreUrl: string;
  googlePlayUrl: string;
}

export const StoreButtons: React.FC<StoreButtonsProps> = ({ appStoreUrl, googlePlayUrl }) => {
  const handleStoreLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <View style={internshipStyles.buttonContainer}>
      <TouchableOpacity 
        style={internshipStyles.imageButton} 
        onPress={() => handleStoreLink(appStoreUrl)}
      >
        <Image
          source={require('../../assets/images/appStore.png')}
          style={internshipStyles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={internshipStyles.imageButton} 
        onPress={() => handleStoreLink(googlePlayUrl)}
      >
        <Image
          source={require('../../assets/images/googlePlay.png')}
          style={internshipStyles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};