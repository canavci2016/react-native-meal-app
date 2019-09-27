import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MEALS} from "../data/dumy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const selectedMealFunc = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
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
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={'Favorites'} iconName={'ios-star-outline'} onPress={() => console.log('Mark as Favorite')}/>
        </HeaderButtons>,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
});

export default MealDetailScreen;