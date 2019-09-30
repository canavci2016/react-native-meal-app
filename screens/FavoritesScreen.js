import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from "../data/dumy-data";

const FavoritesScreen = props => {
    const meals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (<MealList navigation={props.navigation} data={meals}/>);
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default FavoritesScreen;