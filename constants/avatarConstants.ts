export const DEFAULT_AVATARS = [
    require('../assets/images/avatar1.png'),
    require('../assets/images/avatar2.png'),
    require('../assets/images/avatar3.png'),
    require('../assets/images/avatar4.png'),
];
  
export const getAvatarSource = (avatarUrl?: string | number) => {
    if (typeof avatarUrl === 'string' && avatarUrl.startsWith('http')) {
        return { uri: avatarUrl };
    }

    if (typeof avatarUrl === 'number' && avatarUrl >= 1 && avatarUrl <= DEFAULT_AVATARS.length) {
        return DEFAULT_AVATARS[avatarUrl - 1];
    }

    return DEFAULT_AVATARS[0];
};