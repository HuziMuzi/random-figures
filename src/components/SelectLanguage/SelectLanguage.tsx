import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {AppButton} from "../AppButton/AppButton";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";


const listLanguages = [
    {
        title: 'English',
        value: 'en'
    },
    {
        title: 'Русский',
        value: 'ru'
    },
]

export const SelectLanguage = () => {
    const {t, i18n} = useTranslation('changeLanguage');
    const currentLanguage = i18n.language
    const changeLanguage = async (language: string) => {
        await i18n.changeLanguage(language);
    };

    const handlerContinueButton = async () => {
        await AsyncStorage.setItem('i18Lang', currentLanguage)
        // await AsyncStorage.removeItem('i18Lang')
    }

    return (
        <View style={styles().wrapper}>
            <View style={styles().container}>
                <Text style={styles().title}>{t('SelectLanguage')}</Text>
                {listLanguages.map((el, index) =>
                    (<TouchableOpacity key={index} onPress={() => changeLanguage(el.value)}>
                        <Text style={styles(currentLanguage === el.value).text}>{el.title}</Text>
                    </TouchableOpacity>))}
            </View>
            <AppButton
                onPress={handlerContinueButton}
                title={t('button')}
            />
        </View>
    );
};


const styles = StyleSheet.create((currentLanguage?: boolean) => ({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    } as ViewStyle,
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20

    } as ViewStyle,
    title: {
        fontSize: 26,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: currentLanguage ? 'red' : 'black'
    },
}))
