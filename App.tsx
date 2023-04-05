import './i18n';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Main} from '@src/screens/Main';
import {SelectLanguage} from '@src/components/SelectLanguage/SelectLanguage';

export default function App() {
  const [initializeLanguage, setInitializeLanguage] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('i18Lang').then(res => {
      setInitializeLanguage(res);
    });
  }, []);

  return (
    <NavigationContainer>
      <Main />
      <StatusBar style="auto" />
      {initializeLanguage ? <Main /> : <SelectLanguage />}
    </NavigationContainer>
  );
}
