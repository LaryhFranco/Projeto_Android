import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from './components/Inicio';
import Home from './components/Home';

const Stack = createNativeStackNavigator();


export default props =>{
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer> 
                <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false,}}>
                    <Stack.Screen name='Inicio' component={Inicio}  />
                    <Stack.Screen name='home' component={Home}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}