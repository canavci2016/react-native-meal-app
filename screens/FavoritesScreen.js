import React from 'react';
import MealList from '../components/MealList';
import {useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const meals = useSelector(state => state.meals.favoriteMeals);
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