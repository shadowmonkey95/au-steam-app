import { Stack } from "expo-router";
import { View, Image, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { layout } from '../styles/common/layout';
import { colors } from '../styles/common/colors';
import { navigationStyles } from '../styles/navigationStyles';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <View style={layout.fullScreen}>
      {/* Add Header with Image */}
      <View style={navigationStyles.header}>
        <Image
          source={require("../assets/images/appHeader.png")}
          style={navigationStyles.headerImage}
        />
      </View>

      {/* Navigation Stack */}
      <Stack
        screenOptions={{
          animationTypeForReplace: "pop",
          gestureEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="studentInvolvement" />
        <Stack.Screen name="research" />
        <Stack.Screen name="scholarships" />
        <Stack.Screen name="connect" />
        <Stack.Screen name="internship" />
        <Stack.Screen name="tutoringSupport" />
      </Stack>

      {/* Custom Bottom Navigation Bar */}
      <View style={navigationStyles.bottomNav}>
        {/* Back Button with Icon */}
        <TouchableOpacity
          onPress={() => {
            if (!isHomePage) {
              router.back();
            }
          }}
          disabled={isHomePage}
        >
          <Ionicons
            name="arrow-back"
            size={30}
            color={isHomePage ? colors.disabled : colors.white}
          />
        </TouchableOpacity>

        {/* Home Button with Icon */}
        <TouchableOpacity
          onPress={() => {
            if (!isHomePage) {
              router.replace("/");
            }
          }}
        >
          <Ionicons 
            name="home" 
            size={30} 
            color={isHomePage ? colors.disabled : colors.white} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}