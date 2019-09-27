import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const MealItem = props => {

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>);
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',

    },
    mealItem: {
        flex: 1,
        margin: 15,
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    }
});


export default MealItem;