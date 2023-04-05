import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomInputWithLabel} from '@src/components/CustomInputWithLabel/CustomInputWithLabel';
import {Title} from '@src/components/Title/Title';

export const SingUpForm = () => {
  return (
    <View style={styles.container}>
      <Title text="Register a new user" />
      <CustomInputWithLabel label="Login" />
      <CustomInputWithLabel label="Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
