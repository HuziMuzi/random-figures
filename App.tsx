import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {SelectLanguage} from "./src/components/SelectLanguage/SelectLanguage";

const App = () => {
    return (
        <View style={styles.container}>
            <SelectLanguage/>
            <StatusBar style="auto"/>
        </View>
    );
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
