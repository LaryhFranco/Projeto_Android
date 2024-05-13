import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import GameOn from "./components/GameOn";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Register from "./components/Register";

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <SafeAreaView  style={{flex:1,}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="GAMEON" screenOptions={{headerShown:false,}}>
                    <Stack.Screen name="GameOn" component={GameOn}/>
                    <Stack.Screen name="login" component={Login}/>
                    <Stack.Screen name="register" component={Register}/>
                </Stack.Navigator>
            </NavigationContainer>
           
        </SafeAreaView>
    )
}

