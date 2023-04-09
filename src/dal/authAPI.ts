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
          return reject();
        }

        await AsyncStorage.setItem('users', JSON.stringify([...listUsers, newUser]));
        return resolve(newUser.username);
      }, 1000);
    });
  },
  login(user: FormType) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const listUsers = JSON.parse((await AsyncStorage.getItem('users')) as string);
        if (!listUsers) {
          return reject();
        }
        const checkUser = listUsers.filter((el: FormType) => el.username === user.username);
        if (checkUser[0] && checkUser[0].password === user.password) {
          return resolve(user.username);
        }
        return reject();
      }, 1000);
    });
  },
  authMe() {
    return new Promise(resolve => {
      setTimeout(async () => {
        const username = AsyncStorage.getItem('username');
        return resolve(username);
      }, 1000);
    });
  },
};
