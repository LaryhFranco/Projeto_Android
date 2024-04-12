import React from "react";
import { View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return(
        <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        }}>
            <Text>Favorite!</Text>
            <Icon name="share-social-sharp" size={20} color="#4869d9"/>
        </View>
    )
}