import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppButton} from '../../../components/AppButton/AppButton';
import {Title} from '../../../components/Title/Title';
import {Colors} from '../../../theme/Colors';
import {useAppNavigate} from '../../../hooks/hooks';

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

export const SelectLanguage = () => {
  const {t, i18n} = useTranslation('changeLanguage');
  const {navigate} = useAppNavigate();

  const currentLanguage = i18n.language;
  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  const handlerContinueButton = async () => {
    await AsyncStorage.setItem('i18Lang', currentLanguage);
    navigate('Login');
  };

  return (
    <View style={styles().wrapper}>
      <View style={styles().container}>
        <Title>{t('SelectLanguage')}</Title>
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
