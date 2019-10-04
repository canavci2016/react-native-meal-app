import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from "../data/dumy-data";
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    return (
        <FlatList keyExtractor={item => item.id} data={CATEGORIES}
                  renderItem={({item}) => <CategoryGridTile
                      title={item.title}
                      color={item.color}
                      onSelect={() => props.navigation.navigate('CategoryMeals', {categoryId: item.id})}
                  />}
                  numColumns={2}/>
    );
};


CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title={'Menu'} iconName={'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
            </HeaderButtons>
    };
};


export default CategoriesScreen;