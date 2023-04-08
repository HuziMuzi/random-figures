import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import {HomeScreen} from './HomeScreen/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppNavigate} from '../../hooks/hooks';
import {useAuth} from '../../components/AuthProvider/hooks';

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  const {authorize} = useAuth();
  const {navigate} = useAppNavigate();

  useEffect(() => {
    AsyncStorage.getItem('username').then(username => {
      if (username) {
        authorize();
        navigate('Home');
      }
    });
  }, [authorize, navigate]);

  return (
    <Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Screen options={{headerShown: false}} name="Login" children={() => <LoginScreen />} />
      <Screen options={{headerShown: false}} name="Home" children={() => <HomeScreen />} />
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
