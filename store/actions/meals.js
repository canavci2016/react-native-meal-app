export const TOGGLE_FAVORITE = 'TOGGLE';

export const toggleFavorite = (id) => {

    return {
        type: TOGGLE_FAVORITE,
        mealId: id
    }
};