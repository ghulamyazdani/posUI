import { View, StatusBar } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useThemeHook from '../../core/useTheme';

const ScreenWrapper = ({ children, bgDark, bgLight }: any) => {
  const insets = useSafeAreaInsets();
  const { isDarkMode }: any = useThemeHook();

  if (!bgDark || !bgLight) {
    console.error('Background  color required');
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: isDarkMode
          ? bgDark
            ? bgDark
            : '#222223'
          : bgLight
          ? bgLight
          : '#fff',
      }}
    >
      <StatusBar
        animated={true}
        // backgroundColor={theme.backgroundColor}
        backgroundColor={
          isDarkMode
            ? bgDark
              ? bgDark
              : '#222223'
            : bgLight
            ? bgLight
            : '#fff'
        }
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        showHideTransition={'fade'}
      />
      {children}
    </View>
  );
};

export default ScreenWrapper;
