import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {FormType} from '../LoginScreen';
import {Title} from '../../../../components/Title/Title';
import {CustomInputWithLabel} from '../../../../components/CustomInputWithLabel/CustomInputWithLabel';
import {AppButton} from '../../../../components/AppButton/AppButton';
import {Colors} from '../../../../theme/Colors';
import {authAPI} from '../../../../dal/authAPI';
import {useAppNavigate} from '../../../../hooks/hooks';

type SingUpFormPropsType = {
  onPressChangeForm: () => void;
  setIsFetching: (value: boolean) => void;
};

export const SingUpForm = ({onPressChangeForm, setIsFetching}: SingUpFormPropsType) => {
  const {control, handleSubmit, setError, reset} = useForm<FormType>();
  const {navigate} = useAppNavigate();

  const handlerFormSubmit = async (newUser: FormType) => {
    try {
      setIsFetching(true);
      await authAPI.register(newUser);
      reset();
      navigate('Home');
    } catch (e) {
      setError('username', {type: 'custom', message: e as string});
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <View style={styles.container}>
      <Title text="Register a new user" />
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
