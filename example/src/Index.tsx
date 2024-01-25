import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useThemeHook } from 'posui';
import { AccountIcon, BitDropIconMd } from 'posui';
const Index = () => {
  const { theme, toggleTheme, isDarkMode }: any = useThemeHook();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AccountIcon />

        <TouchableOpacity onPress={toggleTheme}>
          <Text>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Text>
        </TouchableOpacity>
        <Text>{theme.backgroundColor}</Text>
      </View>
    </SafeAreaView>
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
