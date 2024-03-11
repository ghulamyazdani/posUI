import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useThemeHook } from 'posui';
// import {  } from 'posui';
import { PageConatainers, ScreenWrapper, H1, H2 } from 'posui';
const Index = () => {
  const { theme, toggleTheme, isDarkMode }: any = useThemeHook();
  return (
    <PageConatainers>
      <View>
        <TouchableOpacity onPress={toggleTheme}>
          <Text>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Text>
        </TouchableOpacity>
        <H1>{theme.backgroundColor}</H1>
      </View>
    </PageConatainers>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
