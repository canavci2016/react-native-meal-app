import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const MealDetailScreen = props => {
    console.log(props.navigation.getParam('name'));
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen Screen</Text>
            <Button onPress={() => props.navigation.popToTop()} title={'Go Back to Categories'}/>
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

export default MealDetailScreen;