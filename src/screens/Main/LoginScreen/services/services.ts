import {authAPI} from '../../../../dal/authAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormType} from '../LoginScreen';
import {UseFormSetError} from 'react-hook-form';
import i18next from 'i18next';

type LoginPropsType = {
  user: FormType;
  setError: UseFormSetError<FormType>;
  authorize: () => void;
  startFetching: () => void;
  stopFetching: () => void;
};

type AuthMePropsType = {
  authorize: () => void;
  startFetching: () => void;
  stopFetching: () => void;
};

export const login = async ({
  user,
  stopFetching,
  startFetching,
  authorize,
  setError,
}: LoginPropsType) => {
  startFetching();
  try {
    const username = await authAPI.login(user);
    await AsyncStorage.setItem('username', username as string);
    authorize();
    return true;
  } catch (e) {
    setError('root', {
      type: 'custom',
      message: `${i18next.t('Invalid username or password', {ns: 'serverMessages'})}`,
    });
    return false;
  } finally {
    stopFetching();
  }
};

export const register = async ({
  user,
  stopFetching,
  startFetching,
  authorize,
  setError,
}: LoginPropsType) => {
  startFetching();
  try {
    const username = await authAPI.register(user);
    await AsyncStorage.setItem('username', username as string);
    authorize();
    return true;
  } catch (e) {
    setError('username', {
      type: 'custom',
      message: `${i18next.t('The user already exists', {ns: 'serverMessages'})}`,
    });
    return false;
  } finally {
    stopFetching();
  }
};

export const authMe = async ({authorize, startFetching, stopFetching}: AuthMePropsType) => {
  startFetching();
  try {
    const username = await authAPI.authMe();
    if (username) {
      authorize();
    }
  } catch (e) {
  } finally {
    stopFetching();
  }
};
