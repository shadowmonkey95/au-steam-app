import { Linking } from 'react-native';

export const openURL = async (url: string): Promise<boolean> => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
      return true;
    }
    console.error(`URL ${url} is not supported`);
    return false;
  } catch (error) {
    console.error('Error opening URL:', error);
    return false;
  }
};