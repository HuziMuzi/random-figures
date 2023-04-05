import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

type AppButtonPropsType = {
    title: string
    onPress: () => void
}

export const AppButton = ({title, onPress}: AppButtonPropsType) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD700',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 17,
    },
    title: {
        fontSize: 18,
    }
})
