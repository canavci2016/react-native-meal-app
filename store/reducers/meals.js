import React from 'react';
import {MEALS} from "../../data/dumy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {

    return state;
};

export default mealsReducer;