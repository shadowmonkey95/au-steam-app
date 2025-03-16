import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { profileStyles } from '../styles/screens/profileStyles';
import { useProfile } from '../context/ProfileContext';
import { ProfileAvatar } from '../components/profile/ProfileAvatar';
import { STEAM_MAJORS } from '../types/userProfile';

export default function ProfileScreen() {
  const { userProfile, isProfileLoading, updateProfile } = useProfile();
  
  // Form state
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | undefined>();
  const [hometown, setHometown] = useState('');
  const [phone, setPhone] = useState('');
  const [steamMajors, setSteamMajors] = useState<Record<string, boolean>>({});
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Load profile data
  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || '');
      setDob(userProfile.dob || '');
      setGender(userProfile.gender);
      setHometown(userProfile.hometown || '');
      setPhone(userProfile.phone || '');
      setSteamMajors(userProfile.steamMajors || {});
    }
  }, [userProfile]);

  // Handle form submission
  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      
      await updateProfile({
        name,
        dob,
        gender,
        hometown,
        phone,
        steamMajors,
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error: any) {
      setError(error.message || 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle checkbox toggle
  const toggleMajor = (majorId: string) => {
    setSteamMajors(prev => ({
      ...prev,
      [majorId]: !prev[majorId]
    }));
  };

  if (isProfileLoading) {
    return (
      <View style={[profileStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#27418b" />
      </View>
    );
  }

  return (
    <ScrollView style={profileStyles.container} contentContainerStyle={profileStyles.scrollContainer}>
      <Text style={profileStyles.title}>Your Profile</Text>
      
      <ProfileAvatar />

      {/* Basic Information */}
      <View style={profileStyles.section}>
        <Text style={profileStyles.sectionTitle}>Basic Information</Text>
        
        {/* Name */}
        <View style={profileStyles.inputContainer}>
          <Text style={profileStyles.label}>Name *</Text>
          <TextInput
            style={profileStyles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>

        {/* Email (readonly) */}
        <View style={profileStyles.inputContainer}>
          <Text style={profileStyles.label}>Email</Text>
          <TextInput
            style={[profileStyles.input, profileStyles.readOnlyInput]}
            value={userProfile?.email}
            editable={false}
          />
        </View>

        {/* Date of Birth */}
        <View style={profileStyles.inputContainer}>
          <Text style={profileStyles.label}>Date of Birth</Text>
          <TextInput
            style={profileStyles.input}
            value={dob}
            onChangeText={setDob}
            placeholder="MM/DD/YYYY"
          />
        </View>

        {/* Gender */}
        <View style={profileStyles.inputContainer}>
          <Text style={profileStyles.label}>Gender</Text>
          <View style={profileStyles.radioGroup}>
            <TouchableOpacity 
              style={profileStyles.radioOption}
              onPress={() => setGender('male')}
            >
              <Ionicons 
                name={gender === 'male' ? 'radio-button-on' : 'radio-button-off'} 
                size={20} 
                color="#27418b" 
              />
              <Text style={profileStyles.radioText}>Male</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={profileStyles.radioOption}
              onPress={() => setGender('female')}
            >
              <Ionicons 
                name={gender === 'female' ? 'radio-button-on' : 'radio-button-off'} 
                size={20} 
                color="#27418b" 
              />
              <Text style={profileStyles.radioText}>Female</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={profileStyles.radioOption}
              onPress={() => setGender('other')}
            >
              <Ionicons 
                name={gender === 'other' ? 'radio-button-on' : 'radio-button-off'} 
                size={20} 
                color="#27418b" 
              />
              <Text style={profileStyles.radioText}>Other</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hometown */}
        <View style={profileStyles.inputContainer}>
          <Text style={profileStyles.label}>Hometown</Text>
          <TextInput
            style={profileStyles.input}
            value={hometown}
            onChangeText={setHometown}
            placeholder="Enter your hometown"
          />
        </View>

        {/* Phone */}
        <View style={profileStyles.inputContainer}>
          <Text style={profileStyles.label}>Phone</Text>
          <TextInput
            style={profileStyles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* STEAM Majors */}
      <View style={profileStyles.section}>
        <Text style={profileStyles.sectionTitle}>STEAM Majors</Text>
        <Text style={profileStyles.label}>Select all that apply:</Text>
        
        <View style={profileStyles.checkboxContainer}>
          {STEAM_MAJORS.map((major) => (
            <View key={major.id} style={profileStyles.checkboxOption}>
              <Switch
                value={steamMajors[major.id] || false}
                onValueChange={() => toggleMajor(major.id)}
                trackColor={{ false: '#d3d3d3', true: '#27418b' }}
              />
              <Text style={profileStyles.checkboxText}>{major.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Submit Button */}
      {error ? <Text style={profileStyles.errorText}>{error}</Text> : null}
      {success ? <Text style={{ color: 'green', textAlign: 'center', marginTop: 10 }}>Profile updated successfully!</Text> : null}
      
      <TouchableOpacity 
        style={profileStyles.button}
        onPress={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={profileStyles.buttonText}>Save Profile</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}