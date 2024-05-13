import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './components/Home';
import Inicio from './components/Inicio';

const Stack = createNativeStackNavigator();


export default props =>{
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer> 
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false,}}>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='Inicio' component={Inicio}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}