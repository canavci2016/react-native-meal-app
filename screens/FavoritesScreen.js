import React from 'react';
import MealList from '../components/MealList';
import {useSelector} from "react-redux";
import {StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import EmptyMealsContent from '../components/EmptyMealsContent';

const FavoritesScreen = props => {
    const meals = useSelector(state => state.meals.favoriteMeals);
    if (meals.length === 0 || !meals) {
        return <EmptyMealsContent/>
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default FavoritesScreen;