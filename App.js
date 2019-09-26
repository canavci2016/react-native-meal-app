import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import MealsNavigator from './navigation/MealsNavigator';
import {useScreens} from "react-native-screens";


useScreens();


const fetchFonths = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonths}
                onFinish={() => setFontLoaded(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <MealsNavigator/>
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
