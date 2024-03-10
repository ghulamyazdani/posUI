import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useThemeHook } from 'posui';
import { AccountIcon } from 'posui';
import { PageConatainers } from 'posui';
const Index = () => {
  const { theme, toggleTheme, isDarkMode }: any = useThemeHook();
  return (
    <PageConatainers>
      <View>
        <AccountIcon />
        <TouchableOpacity onPress={toggleTheme}>
          <Text>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Text>
        </TouchableOpacity>
        <Text>{theme.backgroundColor}</Text>
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
