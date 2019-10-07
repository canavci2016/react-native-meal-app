import React from 'react';
import {CATEGORIES} from "../data/dumy-data";
import MealList from '../components/MealList';
import {connect} from 'react-redux';
import EmptyMealsContent from '../components/EmptyMealsContent';

const selectedCategoryFunc = navicationObj => {
    const categoryId = navicationObj.navigation.getParam('categoryId');
    return CATEGORIES.find(cat => categoryId === cat.id);
};

const CategoryMealsScreen = props => {
    const selectedCategory = selectedCategoryFunc(props);
    const availableMeals = props.meals.filteredMeals;
    //const availableMeals = useSelector(state => state.meals.filteredMeals); // exclude the connect
    const meals = availableMeals.filter(meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0);
    if (meals.length === 0) {
        return <EmptyMealsContent/>
    }
    return (<MealList navigation={props.navigation} data={meals}/>);
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const selectedCategory = selectedCategoryFunc(navigationData);
    return {
        headerTitle: selectedCategory.title,
    };
};

const mapStateToProps = state => {
    const {meals} = state;
    return {meals};
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => {
            dispatch(addPlace(name))
        }
    }
}

export default connect(mapStateToProps, null)(CategoryMealsScreen);