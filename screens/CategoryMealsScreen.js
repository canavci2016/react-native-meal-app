import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from "../data/dumy-data";
import Colors from "../constants/colors";


const selectedCategoryFunc = navicationObj => {
    const categoryId = navicationObj.navigation.getParam('categoryId');
    return CATEGORIES.find(cat => categoryId === cat.id);
};


const CategoryMealsScreen = props => {
    const selectedCategory = selectedCategoryFunc(props);
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen Screen </Text>
            <Text>{selectedCategory.title}</Text>
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