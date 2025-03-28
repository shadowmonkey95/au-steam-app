import { Stack, useRouter, usePathname } from "expo-router";
import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { layout } from '../styles/common/layout';
import { colors } from '../styles/common/colors';
import { navigationStyles } from '../styles/navigationStyles';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../config/firebase';
import { ProfileProvider } from '../context/ProfileContext';
import { HeaderAvatar } from '../components/profile/HeaderAvatar';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle auth state changes separately from routing
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  // Handle routing separately, after component is mounted
  useEffect(() => {
    // Only run once auth state is determined
    if (!isLoading) {
      const isAuthRoute = pathname === '/sign-in' || pathname === '/sign-up';
      
      if (!user && !isAuthRoute) {
        // Not logged in and trying to access protected route
        requestAnimationFrame(() => {
          router.replace('/sign-in');
        });
      } else if (user && isAuthRoute) {
        // Already logged in but on auth route - redirect to home
        requestAnimationFrame(() => {
          router.replace('/');
        });
      }
    }
  }, [isLoading, user, pathname]);

  // Show loading state
  if (isLoading) {
    return (
      <View style={[layout.fullScreen, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  // If not authenticated, show auth stack
  if (!user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
    );
  }

  // For authenticated users, show the full layout with ProfileProvider
  return (
    <ProfileProvider>
      <View style={layout.fullScreen}>
        <View style={navigationStyles.header}>
          <Image
            source={require("../assets/images/appHeader.png")}
            style={navigationStyles.headerImage}
          />
          {/* HeaderAvatar positioned on the right via styling */}
          <HeaderAvatar />
        </View>

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="studentInvolvement" />
          <Stack.Screen name="research" />
          <Stack.Screen name="scholarships" />
          <Stack.Screen name="connect" />
          <Stack.Screen name="internships" />
          <Stack.Screen name="tutoringSupport" />
          <Stack.Screen name="upcomingEvents" />
          <Stack.Screen name="profile" />
        </Stack>

        <View style={navigationStyles.bottomNav}>
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
    </ProfileProvider>
  );
}