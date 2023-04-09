import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './LoginScreen/LoginScreen';
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import {HomeScreen} from './HomeScreen/HomeScreen';
import {useAuth} from '../../components/AuthProvider/hooks';
import {SelectLanguage} from './SelectLanguage/SelectLanguageScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  const {isAuth} = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      {isAuth ? (
        <Screen options={{headerShown: false}} name="Home" children={() => <HomeScreen />} />
      ) : (
        <Screen options={{headerShown: false}} name="Login" children={() => <LoginScreen />} />
      )}
      <Screen
        options={{headerShown: false, animation: 'none'}}
        name="SelectLanguage"
        component={SelectLanguage}
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
