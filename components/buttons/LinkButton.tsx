import React, { useState } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { linkButtonStyles } from '../../styles/components/buttons/linkButtonStyles';
import { openURL } from '../../utils/urlUtils';
import { colors } from '../../styles/common/colors';

interface LinkButtonProps {
  label: string;
  url: string;
  disabled?: boolean;
  onPress?: () => void;
  onError?: (error: string) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  url,
  disabled = false,
  onPress,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    try {
      setIsLoading(true);
      onPress?.();
      
      const success = await openURL(url);
      if (!success && onError) {
        onError(`Unable to open URL: ${url}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={[
        linkButtonStyles.button,
        disabled && linkButtonStyles.buttonDisabled,
      ]}
      onPress={handlePress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text
          style={[
            linkButtonStyles.label,
            disabled && linkButtonStyles.labelDisabled,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default LinkButton;