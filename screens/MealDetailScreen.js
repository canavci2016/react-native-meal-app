import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MEALS} from "../data/dumy-data";

const selectedMealFunc = navigationItem => {
    const mealId = navigationItem.navigation.getParam('mealId');
    return MEALS.find(meal => meal.id === mealId);
}

const MealDetailScreen = props => {
    const selectedMeal = selectedMealFunc(props);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button onPress={() => props.navigation.popToTop()} title={'Go Back to Categories'}/>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const selectedMeal = selectedMealFunc(navigationData);

    return {
        headerTitle: selectedMeal.title
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MealDetailScreen;