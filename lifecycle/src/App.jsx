import React from "react"
import { SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";
import ProfileScreen from "./views/ProfileScreen";
import SettingsScreen from "./views/SettingsScreen";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


export default props =>{
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route}) => ({
                                tabBarIcon: ({focused,color,size}) =>{
                                    let iconName 
                                        if (route.name === "Configuration"){
                                            iconName = focused
                                            ? 'settings'
                                            : 'settings-outline'
                                        }else if (route.name === 'Preferences'){
                                            iconName = focused
                                            ? 'heart'
                                            : 'heart-outline'
                                        }
                                            return <Icon name={iconName} size={size} color={color}/>
                                },
                                tabBarActiveTintColor: '#4869d9',
                                tabBarInactiveTintColor: 'gray',
                                tabBarShowLabel: false,
                                headerShown:false,       
                    })}    
                >
                    <Tab.Screen name="Configuration"> 
                        {() => (
                           <SettingsStack.Navigator>
                                <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
                                <SettingsStack.Screen name="Profile" component={ProfileScreen}/>
                         </SettingsStack.Navigator> 
                        )}
                    </Tab.Screen>
                        <Tab.Screen name="Preferences">
                            {() => (
                                <HomeStack.Navigator>
                                    <HomeStack.Screen name="Home" component={HomeScreen}/>
                                    <HomeStack.Screen name="Details" component={DetailsScreen}/>
                                </HomeStack.Navigator>
                            )}
                        </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}