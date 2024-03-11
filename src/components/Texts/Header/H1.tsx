import { Text } from 'react-native';
import React from 'react';
import useThemeHook from '../../../core/useTheme';

const H1 = ({ children }: any) => {
  const { isDarkMode } = useThemeHook();
  return (
    <Text
      style={{
        fontSize: 50,
        fontWeight: '400',
        color: isDarkMode ? '#FFFFFF' : '#3B3B3B',
      }}
    >
      {children}
    </Text>
  );
};

export default H1;
