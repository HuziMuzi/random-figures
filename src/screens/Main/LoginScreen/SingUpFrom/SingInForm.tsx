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
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../../../components/AuthProvider/hooks';

type SingUpFormPropsType = {
  onPressChangeForm: () => void;
};

export const SingUpForm = ({onPressChangeForm}: SingUpFormPropsType) => {
  const {control, handleSubmit, setError, reset} = useForm<FormType>();
  const {navigate} = useAppNavigate();
  const {authorize, stopFetching, startFetching} = useAuth();
  const {t} = useTranslation(['authorization', 'buttonText', 'validationFields']);

  const handlerFormSubmit = async (user: FormType) => {
    const response = await register({user, startFetching, stopFetching, authorize, setError});
    if (response!) {
      reset();
      navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Title>{t('Register a new user')}</Title>
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
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onPressChangeForm()} style={styles.button}>
          <Text style={styles.textButton}>{t('Sing In', {ns: 'buttonText'})}</Text>
        </TouchableOpacity>
        <AppButton
          title={t('Sing Up', {ns: 'buttonText'})}
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
});
