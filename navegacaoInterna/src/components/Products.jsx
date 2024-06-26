import React from "react";
import { View,Text, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default props =>{
    return( 
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text>Products</Text>
            <Button
            title="Go to About"
            onPress={()=> props.navigation.navigate('About')}/>
            
        </View>
    )
}