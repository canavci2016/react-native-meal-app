import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {MEALS} from "../data/dumy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import DefaultText from "../components/DefaultText";

const selectedMealFunc = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    return MEALS.find(meal => meal.id === mealId);
}

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {
    const selectedMeal = selectedMealFunc(props);
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Indgredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={Math.random()}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={Math.random()}>{step}</ListItem>)}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const selectedMeal = selectedMealFunc(navigationData);

    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={'Favorites'} iconName={'ios-star-outline'} onPress={() => console.log('Mark as Favorite')}/>
        </HeaderButtons>,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
    },
    details: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 15,
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    },
});

export default MealDetailScreen;