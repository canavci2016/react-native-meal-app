import React from 'react';
import {MEALS} from "../../data/dumy-data";
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                let updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals = updatedFavMeals.filter(meal => meal.id !== action.mealId);
                return {...state, favoriteMeals: updatedFavMeals}
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                const {glutenFree, lactoseFree, vegetarian} = appliedFilters;
                const {isGluterFree, isLactoseFree, isVegetarian} = meal;

                if (glutenFree && !isGluterFree || lactoseFree && isLactoseFree || vegetarian && isVegetarian) {
                    return false;
                }

                return true;
            });

            return {...state, filteredMeals};
        default:
            return state;

    }

    return state;
};

export default mealsReducer;