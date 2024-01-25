import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useThemeHook } from 'posui';
const New = () => {
  const { theme, toggleTheme, isDarkMode }: any = useThemeHook();
  return (
    <View>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Text>
      </TouchableOpacity>
      <Text>{theme.backgroundColor}</Text>
    </View>
  );
};

export default New;
