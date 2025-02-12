import React from 'react';
import { View } from 'react-native';
import { ConstructionStatus } from '../components/status/ConstructionStatus';
import { constructionStyles } from '../styles/screens/constructionStyles';

export default function Scholarship() {
  return (
    <View style={constructionStyles.container}>
      <ConstructionStatus 
        title="Scholarship Section Coming Soon"
        subtitle="We're working on building something awesome."
      />
    </View>
  );
}