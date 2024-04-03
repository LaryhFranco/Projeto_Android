import React from "react";
import {SafeAreaView, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import Products from "./components/Products";
import About from "./components/About";

const Stack = createNativeStackNavigator();



export default props => {
    return(
        <SafeAreaView style={{flex:1}}> 
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{title:"Inicío"}}/>
                    <Stack.Screen name="Details" component={DetailsScreen} options={{title:"Segundo"}}/>
                    <Stack.Screen name="Products" component={Products} options={{title:"Terceiro"}}/>
                    <Stack.Screen name="About" component={About} options={{title:"Quarto"}}/>
                </Stack.Navigator>
                
            </NavigationContainer>
        </SafeAreaView>
    )
}