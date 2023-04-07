import {authAPI} from '../../../../dal/authAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormType} from '../LoginScreen';
import {UseFormSetError} from 'react-hook-form';

type LoginPropsType = {
  user: FormType;
  setError: UseFormSetError<FormType>;
  setIsAuth: (value: boolean) => void;
  setIsFetching: (value: boolean) => void;
};

export const login = async ({user, setIsFetching, setIsAuth, setError}: LoginPropsType) => {
  try {
    setIsFetching(true);
    const username = await authAPI.login(user);
    await AsyncStorage.setItem('username', username as string);
    setIsAuth(true);
    return true;
  } catch (e) {
    setError('root', {type: 'custom', message: e as string});
    return false;
  } finally {
    setIsFetching(false);
  }
};

export const register = async ({user, setIsFetching, setIsAuth, setError}: LoginPropsType) => {
  try {
    setIsFetching(true);
    const username = await authAPI.register(user);
    await AsyncStorage.setItem('username', username as string);
    setIsAuth(true);
    return true;
  } catch (e) {
    console.log(e);
    setError('username', {type: 'custom', message: e as string});
    return false;
  } finally {
    setIsFetching(false);
  }
};
