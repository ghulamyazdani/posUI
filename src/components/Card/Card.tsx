import { View, Text } from 'react-native';
import React from 'react';

export const Card = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        borderStyle: 'solid',
        width: '100%',
        height: 20,
      }}
    >
      <Text>Card</Text>
    </View>
  );
};
