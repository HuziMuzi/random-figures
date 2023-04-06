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

type SingInFormPropsType = {
  onPressChangeForm: () => void;
  setIsFetching: (value: boolean) => void;
};

export const SingInForm = ({onPressChangeForm, setIsFetching}: SingInFormPropsType) => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: {errors},
  } = useForm<FormType>();
  const {navigate} = useAppNavigate();

  const handlerFormSubmit = async (user: FormType) => {
    try {
      setIsFetching(true);
      await authAPI.login(user);
      reset();
      navigate('Home');
    } catch (e) {
      setError('root', {type: 'custom', message: e as string});
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <View style={styles.container}>
      <Title text="Log in to your account" />
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
      {errors.root && <Text style={styles.errorText}>{errors.root.message}</Text>}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onPressChangeForm()} style={styles.button}>
          <Text style={styles.textButton}>Sing Up</Text>
        </TouchableOpacity>
        <AppButton title="Sing In" onPress={handleSubmit(handlerFormSubmit)} />
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
  errorText: {
    color: Colors.Red,
    fontSize: 16,
    marginBottom: 5,
  },
});
