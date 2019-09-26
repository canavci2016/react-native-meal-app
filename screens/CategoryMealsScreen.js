import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dumy-data";

const selectedCategoryFunc = navicationObj => {
    const categoryId = navicationObj.navigation.getParam('categoryId');
    return CATEGORIES.find(cat => categoryId === cat.id);
};


const CategoryMealsScreen = props => {
    const selectedCategory = selectedCategoryFunc(props);
    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0);

    const renderMealItem = itemData => {
        return <View>
            <Text>{itemData.item.title}</Text>
        </View>;
    };

    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen Screen </Text>
            <Text>{selectedCategory.title}</Text>
            <FlatList data={meals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
            <Button onPress={() => props.navigation.navigate('MealDetail', {name: 'Jane'})} title={'Meal Detail'}/>
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