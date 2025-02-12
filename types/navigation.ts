export type AppRoutes = 
  | "/"
  | "/studentInvolvement"
  | "/tutoringSupport"
  | "/internships"
  | "/research"
  | "/scholarships"
  | "/connect"
  | "/upcomingEvents";

// Helper function to ensure route format matches Expo Router expectations
export const createRoute = (route: string): AppRoutes => {
  if (route === 'index') return '/';
  return `/${route}` as AppRoutes;
};