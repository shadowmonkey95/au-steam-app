import { Router } from 'expo-router';
import type { AppRoutes } from '../types/navigation';

const routeMap: Record<string, AppRoutes> = {
  studentInvolvement: '/studentInvolvement',
  tutoringSupport: '/tutoringSupport',
  internships: '/internships',
  research: '/research',
  scholarships: '/scholarships',
  connect: '/connect',
  upcomingEvents: '/upcomingEvents',
  index: '/',
} as const;

export const handleNavigation = (route: keyof typeof routeMap, router: Router) => {
  const path = routeMap[route] || '/';
  router.push(path);
};

import { useRouter } from 'expo-router';

export const useAppNavigation = () => {
  const router = useRouter();
  return (route: keyof typeof routeMap) => handleNavigation(route, router);
};