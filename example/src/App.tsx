import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { multiply, Button, Card } from 'posui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Result: {result}</Text> */}
      {/* <Button
        text="hello"
        onPress={() => {
          console.log(result);
        }}
        color="red"
        textColor="#fff"
      /> */}
      <Card>
        <Text>Heelo</Text>
      </Card>

      {/* <ShimmerLoader width={100} height={30} /> */}
    </SafeAreaView>
  );
}

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
