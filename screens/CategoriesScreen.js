import React from 'react';
import {StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Platform} from 'react-native';
import {CATEGORIES} from "../data/dumy-data";
import CategoryGridTile from '../components/CategoryGridTile';

const test = () => {
    return <View style={styles.screen}>
        <Text>Categories Screen</Text>
        <Button onPress={() => props.navigation.navigate('CategoryMeals')} title={'Go to Meal'}/>
        <Button onPress={() => props.navigation.replace('CategoryMeals')} title={'Go to Meal Replace'}/>
    </View>;
}

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


export default CategoriesScreen;