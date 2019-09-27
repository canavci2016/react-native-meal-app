import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoritesScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Text>FavoritesScreen Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default FavoritesScreen;