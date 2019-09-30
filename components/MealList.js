import React from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {
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
            <FlatList style={{width: '100%'}} data={props.data} keyExtractor={item => item.id} renderItem={renderMealItem}/>
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