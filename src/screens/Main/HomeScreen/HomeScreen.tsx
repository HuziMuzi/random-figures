import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenLayout} from '../../../layout/ScreenLayout';
import {SvgLogout} from '../../../assets/SvgLogout';
import {RoundButton} from '../../../components/RoundButton/RoundButton';
import RandomShapeGenerator from '../../../components/RandomFiguresGenerator/RandomFiguresGenerator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../../components/AuthProvider/hooks';

export const HomeScreen = () => {
  const {i18n} = useTranslation('changeLanguage');
  const {logout} = useAuth();

  const currentLanguage = i18n.language;

  const handlerLogout = async () => {
    await AsyncStorage.removeItem('username').then(() => logout());
  };

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
    await AsyncStorage.setItem('i18Lang', language);
  };

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <RandomShapeGenerator />
        </View>
        <View style={styles.buttonsContainer}>
          <RoundButton onPress={() => changeLanguage(currentLanguage === 'en' ? 'ru' : 'en')}>
            <Text style={styles.textLanguage}>{currentLanguage}</Text>
          </RoundButton>
          <RoundButton onPress={handlerLogout}>
            <SvgLogout />
          </RoundButton>
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textLanguage: {
    fontSize: 20,
  },
});
