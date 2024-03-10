import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import useThemeHook from '../../core/useTheme';
export const PageConatainers = ({ children }: any) => {
  const { theme, isDarkMode }: any = useThemeHook();
  // const TRANSITIONS = ['fade', 'slide', 'none'] as const;
  // const [hidden, setHidden] = useState(false);
  // const [statusBarTransition, setStatusBarTransition] = useState<
  //   'fade' | 'slide' | 'none'
  // >(TRANSITIONS[0]);
  return (
    <SafeAreaView style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgroundColor}
        // //text color
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        showHideTransition={'fade'}
        // hidden={hidden}
      />
      {children}
    </SafeAreaView>
  );
};
