export const colors = {
    primary: '#27418b',
    secondary: '#c03d3e',
    disabled: '#aaa',
    white: '#fff',
    black: '#000',
    text: {
      primary: '#000000',
      secondary: '#666666',
      light: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
    },
    border: {
      primary: '#000000',
      light: '#e0e0e0',
    }
} as const;
  
export const themeColors = {
    buttonColors: {
      primary: colors.primary,
      secondary: colors.secondary,
    },
    textColors: {
      emphasis: colors.secondary,
      body: colors.text.primary,
      subtitle: colors.text.secondary,
    }
} as const;