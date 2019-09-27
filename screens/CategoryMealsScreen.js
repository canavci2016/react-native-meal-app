import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dumy-data";
import MealItem from '../components/MealItem';

const selectedCategoryFunc = navicationObj => {
    const categoryId = navicationObj.navigation.getParam('categoryId');
    return CATEGORIES.find(cat => categoryId === cat.id);
};


const CategoryMealsScreen = props => {
    const selectedCategory = selectedCategoryFunc(props);
    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0);

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
                    mealId: id
                }
            })
        };
        return <MealItem   {...passingProps} />;
    };

    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen Screen </Text>
            <Text>{selectedCategory.title}</Text>
            <FlatList style={{width: '100%'}} data={meals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
            <Button onPress={() => props.navigation.goBack()} title={'Go Back'}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const selectedCategory = selectedCategoryFunc(navigationData);
    return {
        headerTitle: selectedCategory.title,
    };

};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default CategoryMealsScreen;