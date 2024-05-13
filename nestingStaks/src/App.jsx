import React from "react";
import { SafeAreaView,Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Routes/Home";
import Settings from "./views/Settings";

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer >    
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
                    <Stack.Screen name="Settings" component={Settings}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}