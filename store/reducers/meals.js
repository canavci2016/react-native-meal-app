import React from 'react';
import {MEALS} from "../../data/dumy-data";
import {TOGGLE_FAVORITE} from "../actions/meals";

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
        default:
            return state;

    }

    return state;
};

export default mealsReducer;