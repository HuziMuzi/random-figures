import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormType} from '../screens/Main/LoginScreen/LoginScreen';

export const authAPI = {
  register(newUser: FormType) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        const listUsers = JSON.parse((await AsyncStorage.getItem('users')) as string);

        if (!listUsers) {
          await AsyncStorage.setItem('users', JSON.stringify([newUser]));
          return resolve;
        }

        const checkUser = listUsers.filter((el: FormType) => el.username === newUser.username);
        if (checkUser[0]) {
          reject('The user already exists');
        } else {
          await AsyncStorage.setItem('users', JSON.stringify([...listUsers, newUser]));
        }
        return resolve();
      }, 1000);
    });
  },
  login(user: FormType) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        const listUsers = JSON.parse((await AsyncStorage.getItem('users')) as string);

        const checkUser = listUsers.filter((el: FormType) => el.username === user.username);
        if (checkUser[0]) {
          const isValidUser = checkUser[0].password === user.password;

          if (isValidUser) {
            return resolve();
          } else {
            return reject('Invalid username or password');
          }
        }
        return reject('Invalid username or password');
      }, 1000);
    });
  },
};
