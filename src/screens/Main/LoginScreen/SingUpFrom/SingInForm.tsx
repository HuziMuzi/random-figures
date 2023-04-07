import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {FormType} from '../LoginScreen';
import {Title} from '../../../../components/Title/Title';
import {CustomInputWithLabel} from '../../../../components/CustomInputWithLabel/CustomInputWithLabel';
import {AppButton} from '../../../../components/AppButton/AppButton';
import {Colors} from '../../../../theme/Colors';
import {useAppNavigate} from '../../../../hooks/hooks';
import {register} from '../services/services';

type SingUpFormPropsType = {
  setIsAuth: (value: boolean) => void;
  setIsFetching: (value: boolean) => void;
  onPressChangeForm: () => void;
};

export const SingUpForm = ({
  onPressChangeForm,
  setIsFetching,
  setIsAuth,
}: SingUpFormPropsType) => {
  const {control, handleSubmit, setError, reset} = useForm<FormType>();
  const {navigate} = useAppNavigate();

  const handlerFormSubmit = async (user: FormType) => {
    const response = await register({user, setIsFetching, setIsAuth, setError});
    if (response!) {
      reset();
      navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Title>Register a new user</Title>
      <CustomInputWithLabel
        label="Username"
        control={control}
        name="username"
        rules={{
          required: 'The filed is required',
          minLength: {
            value: 3,
            message: 'Should be minimum of 3 characters',
          },
        }}
      />
      <CustomInputWithLabel
        label="Password"
        control={control}
        name="password"
        secureTextEntry={true}
        rules={{
          required: 'The filed is required',
          minLength: {
            value: 3,
            message: 'Should be minimum of 3 characters',
          },
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onPressChangeForm()} style={styles.button}>
          <Text style={styles.textButton}>Sing In</Text>
        </TouchableOpacity>
        <AppButton title="Sing Up" onPress={handleSubmit(handlerFormSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
