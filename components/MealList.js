import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from '../components/MealItem';
import {useSelector} from "react-redux";

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const renderMealItem = itemData => {
        const {title, duration, complexity, affordability, imageUrl, id} = itemData.item;
        const passingProps = {
            title,
            duration,
            complexity,
            affordability,
            imageUrl,
            onSelect: () => props.navigation.navigate({
                routeName: 'MealDetail', params: {
                    mealId: id,
                    mealTitle: title,
                    isFavorite: favoriteMeals.some(meal => meal.id === id),
                }
            })
        };
        return <MealItem   {...passingProps} />;
    };

    return (
        <View style={styles.screen}>
            <FlatList style={{width: '100%'}} data={props.data} keyExtractor={item => item.id}
                      renderItem={renderMealItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MealList;