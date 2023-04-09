import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme/Colors';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={[StyleSheet.absoluteFill, styles.indicator]}
        size="large"
        color={Colors.Yellow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GrayStrongDark,
  },
  indicator: {
    flex: 1,
    backgroundColor: Colors.GrayStrongDark,
  },
});
