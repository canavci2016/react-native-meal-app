import React from 'react';
import {CATEGORIES, MEALS} from "../data/dumy-data";
import MealList from '../components/MealList';

const selectedCategoryFunc = navicationObj => {
    const categoryId = navicationObj.navigation.getParam('categoryId');
    return CATEGORIES.find(cat => categoryId === cat.id);
};

const CategoryMealsScreen = props => {
    const selectedCategory = selectedCategoryFunc(props);
    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0);
    return (<MealList navigation={props.navigation} data={meals}/>);
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const selectedCategory = selectedCategoryFunc(navigationData);
    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealsScreen;