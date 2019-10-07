import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";

const FilterSwitch = props => {
    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch thumbColor={Colors.accentColor} trackColor={{true: Colors.primaryColor}} value={props.state}
                onValueChange={props.onChange}/>
    </View>;
};

const FiltersScreen = props => {
    const {navigation} = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);


    const dispatch = useDispatch();


    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };

        dispatch(setFilters(appliedFilters));

        console.log(appliedFilters);

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        console.log('Hellow wordl:', Math.random());
        navigation.setParams({save: saveFilters});
        //navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters Screen</Text>
            <FilterSwitch label={'Gluten-free'} state={isGlutenFree} onChange={value => setIsGlutenFree(value)}/>
            <FilterSwitch label={'Lactose-Free'} state={isLactoseFree} onChange={value => setIsLactoseFree(value)}/>
            <FilterSwitch label={'Vegan'} state={isVegan} onChange={value => setIsVegan(value)}/>
            <FilterSwitch label={'Vegatarian'} state={isVegetarian} onChange={value => setIsVegetarian(value)}/>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title={'Menu'} iconName={'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
            </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={'Save'} iconName={'ios-save'} onPress={navData.navigation.getParam('save')}/>
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
    }
});


export default FiltersScreen;