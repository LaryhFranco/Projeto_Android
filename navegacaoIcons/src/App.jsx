import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import FavoriteScreen from "./components/FavoriteScreen";
import SharedScreen from "./components/SharedScreen";

const Stack = createNativeStackNavigator();

export default props =>{
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                    <Stack.Screen name="Favorite" component={FavoriteScreen}/>
                    <Stack.Screen name="Shared" component={SharedScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}