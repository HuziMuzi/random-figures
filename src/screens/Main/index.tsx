import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import {HomeScreen} from './HomeScreen/HomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
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
