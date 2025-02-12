import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { LinkButton } from "../components/buttons/LinkButton";
import { ScheduleBox } from "../components/boxes/ScheduleBox";
import { TUTORING_CONTENT } from "../constants/tutoringContent";
import { tutoringStyles } from "../styles/screens/tutoringStyles";

export default function TutoringSupport() {
  return (
    <ImageBackground
      source={require("../assets/images/tutoring.jpg")}
      style={tutoringStyles.background}
      imageStyle={tutoringStyles.backgroundImage}
    >
      <ScrollView style={tutoringStyles.container}>
        <Text style={tutoringStyles.titleText}>
          {TUTORING_CONTENT.title}
        </Text>

        <Text style={tutoringStyles.subText}>
          {TUTORING_CONTENT.intro}
        </Text>

        <Text style={tutoringStyles.subHeading}>
          {TUTORING_CONTENT.mathStatsLab.title}
        </Text>

        <Text style={tutoringStyles.emphasisText}>
          {TUTORING_CONTENT.mathStatsLab.location}
        </Text>

        <Text style={tutoringStyles.subText}>
          {TUTORING_CONTENT.mathStatsLab.description}
        </Text>

        <Text style={tutoringStyles.subHeading}>
          {TUTORING_CONTENT.courses.title}
        </Text>

        <Text style={tutoringStyles.emphasisText}>
          {TUTORING_CONTENT.courses.list}
        </Text>

        <Text style={tutoringStyles.subText}>
          {TUTORING_CONTENT.courses.note}
        </Text>

        <LinkButton 
          label="Additional Courses" 
          url={TUTORING_CONTENT.courses.additionalCoursesUrl} 
        />

        <Text style={tutoringStyles.subHeading}>
          {TUTORING_CONTENT.schedule.title}
        </Text>

        {TUTORING_CONTENT.schedule.hours.map((schedule, index) => (
          <ScheduleBox
            key={index}
            day={schedule.day}
            time={schedule.time}
          />
        ))}

        <Text style={tutoringStyles.subHeading}>
          {TUTORING_CONTENT.software.title}
        </Text>

        <Text style={tutoringStyles.subText}>
          {TUTORING_CONTENT.software.description}
        </Text>

        <LinkButton 
          label="WCOnline" 
          url={TUTORING_CONTENT.software.onlineUrl} 
        />

        <View style={tutoringStyles.bottomSpacing} />
      </ScrollView>
    </ImageBackground>
  );
}