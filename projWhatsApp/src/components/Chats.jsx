import React from "react";
import { View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center',}}>
            <Text>Chats</Text>
            <Icon name="chatbox-ellipses-sharp" size={20} color="#a103fc"/>
        </View>
    )
}