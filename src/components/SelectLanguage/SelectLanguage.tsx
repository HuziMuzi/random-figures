import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppButton} from "../AppButton/AppButton";


export const SelectLanguage = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.title}>Select language</Text>
                <TouchableOpacity><Text style={styles.text}>Russian</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.text}>English</Text></TouchableOpacity>
            </View>
            <AppButton
                onPress={() => {
                }}
                title='continue'
            />
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        justifyContent: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20

    },
    title: {
        fontSize: 26,
        marginBottom: 20,
    },
    text: {
        fontSize: 20
    },
})
