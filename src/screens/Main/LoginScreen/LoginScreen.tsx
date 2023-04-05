import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppButton} from '@src/components/AppButton/AppButton';
import SingInForm from './SingInFrom/SingInForm';
import {SingUpForm} from './SingUpFrom/SingInForm';
import {ScreenLayout} from '@src/components/layout/ScreenLayout';
import {Colors} from '@src/theme/Colors';

export const LoginScreen = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const handlerChangeFormatForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {isLoginForm ? <SingInForm /> : <SingUpForm />}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handlerChangeFormatForm} style={styles.button}>
            <Text style={styles.textButton}>{isLoginForm ? 'Sing Up' : 'Sing In'}</Text>
          </TouchableOpacity>
          <AppButton title={isLoginForm ? 'Sing In' : 'Sing Up'} onPress={() => {}} />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: 110,
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
  },
  textButton: {
    fontSize: 20,
    color: Colors.Yellow,
  },
});
