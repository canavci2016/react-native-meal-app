import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from "react-native";
import Colors from "../constants/colors";

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
}, {
    mode: 'modal',
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'Meal App',
    },
});

export default createAppContainer(MealsNavigator);