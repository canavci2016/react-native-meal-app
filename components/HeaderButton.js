import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";

import Colors from '../constants/colors';


const CustomeHeaderButton = props => {
    return <HeaderButton  IconComponent={Ionicons} iconSize={23}
                         color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} {...props}/>;
};

export default CustomeHeaderButton;