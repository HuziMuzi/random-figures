import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {AppButton} from '../AppButton/AppButton';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../../theme/Colors';
import {Title} from '../Title/Title';

const listLanguages = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Русский',
    value: 'ru',
  },
];

type SelectLanguagePropsType = {
  setIsInitializeLanguage: (value: boolean) => void;
};

export const SelectLanguage = ({setIsInitializeLanguage}: SelectLanguagePropsType) => {
  const {t, i18n} = useTranslation('changeLanguage');
  const currentLanguage = i18n.language;
  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  const handlerContinueButton = async () => {
    await AsyncStorage.setItem('i18Lang', currentLanguage);
    setIsInitializeLanguage(true);
    // await AsyncStorage.removeItem('i18Lang');
  };

  return (
    <View style={styles().wrapper}>
      <View style={styles().container}>
        <Title text={t('SelectLanguage')} />
        <View style={styles().languagesContainer}>
          {listLanguages.map((el, index) => (
            <TouchableOpacity key={index} onPress={() => changeLanguage(el.value)}>
              <Text style={styles(currentLanguage === el.value).text}>{el.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <AppButton onPress={handlerContinueButton} title={t('button')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create((currentLanguage?: boolean) => ({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GrayStrongDark,
  } as ViewStyle,
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  } as ViewStyle,
  text: {
    fontSize: 20,
    color: currentLanguage ? Colors.Red : Colors.White,
  },
  languagesContainer: {
    marginBottom: 10,
  } as ViewStyle,
}));
