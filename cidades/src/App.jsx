import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Cities from "./components/Cities";
import ListaCity from "./components/ListaCity";
import Locations from "./components/Locations";

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Cities' component={Cities} options={{title:"Inicío", headerStyle:{backgroundColor:"#c278fa"}, headerTintColor:'#fff'}} />
                    <Stack.Screen name='Lista' component={ListaCity} options={{title:"Cities", headerStyle:{backgroundColor:"#c278fa"}, headerTintColor:'#fff'}} />
                    <Stack.Screen name='Locations' component={Locations} options={{title:"Locations", headerStyle:{backgroundColor:"#c278fa"}, headerTintColor:'#fff'}} />
                    
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}