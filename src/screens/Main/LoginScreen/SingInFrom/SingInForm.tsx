import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {FormType} from '../LoginScreen';
import {Title} from '../../../../components/Title/Title';
import {CustomInputWithLabel} from '../../../../components/CustomInputWithLabel/CustomInputWithLabel';
import {AppButton} from '../../../../components/AppButton/AppButton';
import {Colors} from '../../../../theme/Colors';
import {useAppNavigate} from '../../../../hooks/hooks';
import {login} from '../services/services';
import {useTranslation} from 'react-i18next';

type SingInFormPropsType = {
  setIsAuth: (value: boolean) => void;
  setIsFetching: (value: boolean) => void;
  onPressChangeForm: () => void;
};

export const SingInForm = ({
  setIsAuth,
  setIsFetching,
  onPressChangeForm,
}: SingInFormPropsType) => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: {errors},
  } = useForm<FormType>();
  const {navigate} = useAppNavigate();
  const {t} = useTranslation(['authorization', 'buttonText', 'validationFields']);

  const handlerFormSubmit = async (user: FormType) => {
    const response = await login({user, setError, setIsAuth, setIsFetching});
    if (response!) {
      reset();
      navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Title>{t('Log in your account')}</Title>
      <CustomInputWithLabel
        label={t('Username')}
        control={control}
        name="username"
        rules={{
          required: t('Required', {ns: 'validationFields'}),
          minLength: {
            value: 3,
            message: t('Min length', {ns: 'validationFields'}),
          },
        }}
      />
      <CustomInputWithLabel
        label={t('Password')}
        control={control}
        name="password"
        secureTextEntry={true}
        rules={{
          required: t('Required', {ns: 'validationFields'}),
          minLength: {
            value: 3,
            message: t('Min length', {ns: 'validationFields'}),
          },
        }}
      />
      {errors.root && <Text style={styles.errorText}>{errors.root.message}</Text>}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onPressChangeForm()} style={styles.button}>
          <Text style={styles.textButton}>{t('Sing Up', {ns: 'buttonText'})}</Text>
        </TouchableOpacity>
        <AppButton
          title={t('Sing In', {ns: 'buttonText'})}
          onPress={handleSubmit(handlerFormSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonsContainer: {
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
