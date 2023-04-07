import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import {HomeScreen} from './HomeScreen/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppNavigate} from '../../hooks/hooks';

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  const [isAuth, setIsAuth] = useState(false);
  const {navigate} = useAppNavigate();

  useEffect(() => {
    AsyncStorage.getItem('username').then(username => {
      if (username) {
        setIsAuth(true);
        navigate('Home');
      }
    });
  }, [navigate]);
  console.log(isAuth);
  return (
    <Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Screen
        options={{headerShown: false}}
        name="Login"
        children={() => <LoginScreen isAuth={isAuth} setIsAuth={setIsAuth} />}
      />
      <Screen
        options={{headerShown: false}}
        name="Home"
        children={() => <HomeScreen setIsAuth={setIsAuth} isAuth={isAuth} />}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.GrayStrongDark,
  },
  headerTitleStyle: {
    color: Colors.White,
    fontSize: 20,
  },
});
