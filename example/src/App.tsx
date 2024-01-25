/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { multiply, Card, PosUIThemeProvider } from 'posui';
import LinearGradient from 'react-native-linear-gradient';
import Index from './Index';
export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   multiply(3, 7).then(setResult);
  // }, []);

  return (
    <PosUIThemeProvider>
      <Index />
    </PosUIThemeProvider>
  );
}
