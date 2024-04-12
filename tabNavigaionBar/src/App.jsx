import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteScreen from "./components/FavoriteScreen";
import SharedScreen from "./components/SharedScreen";

const Tab = createBottomTabNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Tab.Navigator 
                screenOptions={({route}) => ({
                            tabBarIcon: ({focused,color,size}) => {
                                let iconName
                                    if (route.name === "home"){
                                        iconName = focused
                                        ? 'home'
                                        : 'home-outline'
                                }else if(route.name === "settings"){
                                    iconName = focused
                                    ? 'settings'
                                    : 'settings-outline'
                            }else if(route.name === "favorite"){
                                iconName = focused
                                ? 'heart'
                                : 'heart-outline'
                        }else if(route.name === "shared"){
                            iconName = focused ? 'share-social'
                            : 'share-social-outline'
                        }
                                return <Icon name={iconName} size={size} color={color}/>
                        },
                        tabBarActiveTintColor: '#4869d9',
                        tabBarInactiveTintColor: 'gray',
                            })}
                     >
                        

                   <Tab.Screen name="home" component={HomeScreen}/>
                   <Tab.Screen name="settings" component={SettingsScreen}/>
                   <Tab.Screen name="favorite" component={FavoriteScreen}/>
                   <Tab.Screen name="shared" component={SharedScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}