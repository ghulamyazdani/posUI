/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

export const Card = ({ children }: any) => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        borderStyle: 'solid',
        // width: '100%',
        maxWidth: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E3E4E7',
        padding: 10,
      }}
    >
      {children}
    </View>
  );
};
