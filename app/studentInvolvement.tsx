import React from 'react';
import { View, ImageBackground } from 'react-native';
import { ConstructionStatus } from '../components/status/ConstructionStatus';
import { studentInvolvementStyles } from '../styles/screens/studentInvolvementStyles';

export default function StudentInvolvement() {
  return (
    <ImageBackground
      source={require("../assets/images/students.jpg")}
      style={studentInvolvementStyles.container}
      imageStyle={{ opacity: 0.07 }}
    >
      <View style={studentInvolvementStyles.content}>
        <ConstructionStatus 
          title="Student Involvement Coming Soon"
          subtitle="We're working on bringing you exciting opportunities to get involved in the STEAM community."
        />
      </View>
    </ImageBackground>
  );
}