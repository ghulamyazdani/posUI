import { Text } from 'react-native';
import React from 'react';

const H2 = ({ children }: any) => {
  return (
    <Text
      style={{
        fontSize: 50,
      }}
    >
      {children}
    </Text>
  );
};

export default H2;
