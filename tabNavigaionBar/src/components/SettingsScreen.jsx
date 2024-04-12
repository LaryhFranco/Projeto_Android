import React from "react";
import { View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default props => {
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text>Settings!</Text>
            <Icon name="settings-sharp" size={20} color="#4869d9"/>
        </View>
    )
}