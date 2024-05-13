import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';

import UserList from './views/UserList';
import UserForm from './views/UserForm';


const Stack = createNativeStackNavigator();

export default props => {
    return(
        <NavigationContainer >
            <Stack.Navigator initialRouteName='List' 
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor:"#8c6eb8"
                    },
                    headerTintColor:"#fff",
                    headerTitleStyle:{
                        fontWeight:'bold',
                    }
                }
            }>
                <Stack.Screen 
                    name='List' 
                    component={UserList}
                    options={({navigation})=>{
                        return  {
                                title:"Lista de usuários",
                                headerRight:()=>(
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type='clear'
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                )
                            }
                        }
                    }
                />
            <Stack.Screen 
                name='UserForm' 
                component={UserForm}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}