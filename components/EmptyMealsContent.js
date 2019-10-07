import React from 'react';
import {View, StyleSheet} from "react-native";
import DefaultText from '../components/DefaultText';

const EmptyMealsContent = props => {
    return <View style={styles.content}><DefaultText>No meals found. Start Adding some or look into filters section</DefaultText></View>
};


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default EmptyMealsContent;