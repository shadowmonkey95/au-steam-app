import React from 'react';
import { View } from 'react-native';
import { ConstructionStatus } from '../components/status/ConstructionStatus';
import { constructionStyles } from '../styles/screens/constructionStyles';

export default function Connect() {
  return (
    <View style={constructionStyles.container}>
      <ConstructionStatus 
        title="Connect Section Coming Soon"
        subtitle="We're working on building connections between students and opportunities."
      />
    </View>
  );
}