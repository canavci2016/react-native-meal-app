import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";
import Colors from "../constants/colors";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from "react-navigation-drawer";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'Meal App',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {initialRouteName: 'Categories', mode: 'modal', defaultNavigationOptions: defaultStackNavOptions});


const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {defaultNavigationOptions: defaultStackNavOptions});


const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: 'Meals',
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.accentColor,
        }
    },
};

const MealsFavTabNavigator = Platform.OS === 'ios'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        labeled: true,
        shifting: true,
        activeColor: 'white',
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        }
    });


const filtersNav = createStackNavigator({
    Filters: FiltersScreen,
}, {defaultNavigationOptions: defaultStackNavOptions});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals',
        },
    },
    Filters: {
        screen: filtersNav,
        navigationOptions: {
            drawerLabel: 'Filters'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
        }
    }
});

export default createAppContainer(MainNavigator);