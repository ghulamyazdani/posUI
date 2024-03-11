/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import useThemeHook from '../../core/useTheme';
import { View } from 'react-native';
import React from 'react';
type Card = {
  maxW: Number;
};
export const Card = ({ p, __dark, __light, maxW, children }: any) => {
  const { isDarkMode } = useThemeHook();
  return (
    <View
      style={{
        // backgroundColor: 'red',
        borderStyle: 'solid',
        width: '100%',
        maxWidth: maxW ? maxW : '100%',
        borderRadius: 10,
        borderWidth: 1,
        padding: p ? p : 'auto',
        borderColor: isDarkMode ? __dark?.bg : __light?.bg,
      }}
    >
      {children}
    </View>
  );
};
