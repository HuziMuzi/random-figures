import './i18n';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Main} from './src/screens/Main';
import {SelectLanguage} from './src/components/SelectLanguage/SelectLanguage';

export default function App() {
  const [isInitializeLanguage, setIsInitializeLanguage] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('i18Lang').then(res => {
      setIsInitializeLanguage(!!res);
    });
  }, []);

  return (
    <NavigationContainer>
      {/*<Main />*/}
      <StatusBar style="auto" />
      {isInitializeLanguage ? (
        <Main />
      ) : (
        <SelectLanguage setIsInitializeLanguage={setIsInitializeLanguage} />
      )}
    </NavigationContainer>
  );
}
