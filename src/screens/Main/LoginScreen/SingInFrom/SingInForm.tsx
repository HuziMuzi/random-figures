import React from 'react';
import {View} from 'react-native';
import {CustomInputWithLabel} from '@src/components/CustomInputWithLabel/CustomInputWithLabel';
import {Title} from '@src/components/Title/Title';

const SingInForm = () => {
  return (
    <View>
      <Title text="Log in to your account" />
      <CustomInputWithLabel label="Login" />
      <CustomInputWithLabel label="Password" />
    </View>
  );
};

export default SingInForm;
