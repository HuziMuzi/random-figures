import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {StyleSheet} from 'react-native';
import {Colors} from '@src/theme/Colors';

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Screen name="Login" component={LoginScreen} />
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
