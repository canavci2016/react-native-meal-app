import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from "../data/dumy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const meals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (<MealList navigation={props.navigation} data={meals}/>);
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favorite',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title={'Menu'} iconName={'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
            </HeaderButtons>
    };
};

export default FavoritesScreen;