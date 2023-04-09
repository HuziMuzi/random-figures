import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {Main} from './src/screens/Main';
import {authMe} from './src/screens/Main/LoginScreen/services/services';
import {useAuth} from './src/components/AuthProvider/hooks';
import {SplashScreen} from './src/layout/SplashScreen';

const AppEntry = () => {
  const {authorize, stopFetching, startFetching} = useAuth();
  const [initializeApp, setInitializeApp] = useState(true);

  useEffect(() => {
    authMe({authorize, stopFetching, startFetching}).then(() => {
      setInitializeApp(false);
    });
  }, [authorize]);

  if (initializeApp) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Main />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppEntry;
