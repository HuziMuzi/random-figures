import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormType} from '../screens/Main/LoginScreen/LoginScreen';

export const authAPI = {
  register(newUser: FormType) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const listUsers = JSON.parse((await AsyncStorage.getItem('users')) as string);

        if (!listUsers) {
          await AsyncStorage.setItem('users', JSON.stringify([newUser]));
          return resolve(newUser.username);
        }

        const checkUser = listUsers.filter((el: FormType) => el.username === newUser.username);
        if (checkUser[0]) {
          reject();
        } else {
          await AsyncStorage.setItem('users', JSON.stringify([...listUsers, newUser]));
        }
        return resolve(newUser.username);
      }, 1000);
    });
  },
  login(user: FormType) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const listUsers = JSON.parse((await AsyncStorage.getItem('users')) as string);

        const checkUser = listUsers.filter((el: FormType) => el.username === user.username);
        if (checkUser[0]) {
          const isValidUser = checkUser[0].password === user.password;

          if (isValidUser) {
            return resolve(user.username);
          } else {
            return reject();
          }
        }
        return reject();
      }, 1000);
    });
  },
};
