import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SingInForm} from './SingInFrom/SingInForm';
import {SingUpForm} from './SingUpFrom/SingInForm';
import {ScreenLayout} from '../../../layout/ScreenLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../../components/AuthProvider/hooks';
import {useAppNavigate} from '../../../hooks/hooks';

export type FormType = {
  username: string;
  password: string;
};

export const LoginScreen = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const {isFetching} = useAuth();
  const {navigate} = useAppNavigate();

  const handlerChangeForm = () => setIsLoginForm(!isLoginForm);

  useEffect(() => {
    AsyncStorage.getItem('i18Lang').then(language => {
      !language && navigate('SelectLanguage');
    });
  }, [navigate]);

  return (
    <ScreenLayout isFetching={isFetching}>
      <View style={styles.container}>
        {isLoginForm ? (
          <SingUpForm onPressChangeForm={handlerChangeForm} />
        ) : (
          <SingInForm onPressChangeForm={handlerChangeForm} />
        )}
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
});
