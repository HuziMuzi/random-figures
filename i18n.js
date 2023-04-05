import i18next from 'i18next';
import en from './public/locales/en.json';
import ru from './public/locales/ru.json';
import {initReactI18next} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
        const savedDataJSON = await AsyncStorage.getItem('i18Lang');
        const lng = savedDataJSON ? savedDataJSON : 'en';
        callback(lng);
    }
};

i18next.use(initReactI18next).use(languageDetector).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
        en,
        ru,
    },
    react: {
        useSuspense: false,
    },
});

export default i18next;
