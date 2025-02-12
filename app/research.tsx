import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { LinkButton } from "../components/buttons/LinkButton";
import { EmailTip } from "../components/tips/EmailTip";
import { DEPARTMENT_LINKS, EMAIL_TIPS } from "../constants/researchContent";
import { researchStyles } from "../styles/screens/researchStyles";

export default function ResearchPage() {
  return (
    <ImageBackground
      source={require("../assets/images/research.jpg")}
      style={researchStyles.background}
      imageStyle={researchStyles.backgroundImage}
    >
      <ScrollView style={researchStyles.container}>
        <Text style={researchStyles.titleText}>Research</Text>

        <Text style={researchStyles.subText}>
          Engaging in research is the next step in your development as a 
          scientist and can be done anytime, on or off campus. Research 
          on-campus can be done during the fall or spring semesters or 
          during the summer
        </Text>

        <Text style={researchStyles.subHeading}>Key Areas of Research</Text>

        <Text style={researchStyles.subText}>
          1) Find a facutly member to work with.
        </Text>

        <View style={researchStyles.departmentLinksContainer}>
          {DEPARTMENT_LINKS.map((dept, index) => (
            <LinkButton
              key={index}
              label={dept.label}
              url={dept.url}
            />
          ))}
        </View>

        <Text style={researchStyles.subText}>
          2) Congratulations! You've found a faculty member that you would like to 
          do research with! The next step is send an email asking if you can work 
          in their lab.
        </Text>

        <Text style={researchStyles.emphasisText}>
          Tips for Writing this Email:
        </Text>

        {EMAIL_TIPS.map((tip, index) => (
          <EmailTip
            key={index}
            title={tip.title}
            content={tip.content}
          />
        ))}

        <View style={researchStyles.bottomSpacing} />
      </ScrollView>
    </ImageBackground>
  );
}