import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { LinearGradient } from 'expo-linear-gradient';

export const ShimmerLoader = ({
  duration = 1500,
  width = 50,
  height = 50,
}: any) => {
  const translateX = new Animated.Value(-300);

  translateX.setValue(-300);
  Animated.loop(
    Animated.timing(translateX, {
      toValue: 600,
      duration: duration,
      useNativeDriver: true,
    }),
    {
      iterations: -1,
    }
  ).start();

  return (
    <View
      style={[
        styles.mainContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          height: height,
          width: width,
          overflow: 'hidden',
          backgroundColor: '#E3E4E7',
        },
      ]}
    >
      <Animated.View
        style={[styles.animatedContainer, { transform: [{ translateX }] }]}
      >
        {/* <View style={styles.gradient}></View> */}
        <LinearGradient
          colors={['transparent', '#E3E4E7', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
  },
  animatedContainer: {
    height: '100%',
  },
  gradient: {
    flex: 1,
    height: '100%',
  },
});
