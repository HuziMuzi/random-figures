import './i18n';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {SelectLanguage} from "./src/components/SelectLanguage/SelectLanguage";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const [initializeLanguage, setInitializeLanguage] = useState<string | null>(null)

    useEffect(() => {
        AsyncStorage.getItem('i18Lang').then(res => {
            setInitializeLanguage(res)
        })
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {initializeLanguage ? <Text>Done</Text> : <SelectLanguage/>}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
