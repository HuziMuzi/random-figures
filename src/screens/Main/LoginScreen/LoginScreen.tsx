import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SingInForm} from './SingInFrom/SingInForm';
import {SingUpForm} from './SingUpFrom/SingInForm';
import {ScreenLayout} from '../../../layout/ScreenLayout';

export type FormType = {
  username: string;
  password: string;
};

type LoginScreenPropsType = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

export const LoginScreen = ({setIsAuth}: LoginScreenPropsType) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [iaFetching, setIsFetching] = useState(false);

  const handlerChangeForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <ScreenLayout isFetching={iaFetching}>
      <View style={styles.container}>
        {isLoginForm ? (
          <SingUpForm
            onPressChangeForm={handlerChangeForm}
            setIsFetching={setIsFetching}
            setIsAuth={setIsAuth}
          />
        ) : (
          <SingInForm
            onPressChangeForm={handlerChangeForm}
            setIsFetching={setIsFetching}
            setIsAuth={setIsAuth}
          />
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
