import React from "react";
import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import { StoreButtons } from "../components/buttons/StoreButtons";
import { INTERNSHIP_CONTENT } from "../constants/internshipContent";
import { internshipStyles } from "../styles/screens/internshipStyles";

export default function InternshipPage() {
  return (
    <ImageBackground
      source={require("../assets/images/tutoring.jpg")}
      style={internshipStyles.background}
      imageStyle={internshipStyles.backgroundImage}
    >
      <ScrollView style={internshipStyles.container}>
        <Text style={internshipStyles.titleText}>
          {INTERNSHIP_CONTENT.mainTitle}
        </Text>

        <Text style={internshipStyles.subText}>
          {INTERNSHIP_CONTENT.intro}
        </Text>

        <Text style={internshipStyles.subHeading}>
          {INTERNSHIP_CONTENT.handshake.title}
        </Text>

        <View style={internshipStyles.imageTextContainer}>
          <Image 
            source={require("../assets/images/handshake.png")} 
            style={internshipStyles.squareImage} 
          />
          <Text style={internshipStyles.imageText}>
            {INTERNSHIP_CONTENT.handshake.appName}
          </Text>
        </View>

        <Text style={internshipStyles.subText}>
          {INTERNSHIP_CONTENT.handshake.description}
        </Text>

        <StoreButtons
          appStoreUrl={INTERNSHIP_CONTENT.handshake.appStoreUrl}
          googlePlayUrl={INTERNSHIP_CONTENT.handshake.googlePlayUrl}
        />

        <Text style={internshipStyles.subHeading}>
          {INTERNSHIP_CONTENT.jobFair.title}
        </Text>

        <Text style={internshipStyles.subText}>
          {INTERNSHIP_CONTENT.jobFair.description}
        </Text>

        <Text style={internshipStyles.emphasisText}>
          {INTERNSHIP_CONTENT.jobFair.notice}
        </Text>

        <View style={internshipStyles.bottomSpacing} />
      </ScrollView>
    </ImageBackground>
  );
}