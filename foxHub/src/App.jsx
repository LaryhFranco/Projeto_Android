import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Conta from "./components/Conta";
import Cadastrar from "./components/Cadastrar";

const Stack = createNativeStackNavigator();

export default () => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="conta" screenOptions={{headerShown:false,}}>
                    <Stack.Screen name="conta" component={Conta}></Stack.Screen>
                    <Stack.Screen name="cadastrar" component={Cadastrar}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
