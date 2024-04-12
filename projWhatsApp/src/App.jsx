import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./components/Chats";

const Tab = createBottomTabNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) =>({

                        
                    })}
                >
                    <Tab.Screen name="chats" component={Chats}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}