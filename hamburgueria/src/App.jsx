import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import  Icon  from 'react-native-vector-icons/Ionicons';
import FoodList from './views/FoodList';
import FoodForm from './views/FoodForm';

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='FoodList'
            screenOptions={
                {
                    headerStyle:{
                        backgroundColor:"#e8b746"
                    },
                    headerTintColor:"#fff",
                    headerTitleStyle:{
                        fontWeight:'bold',
                    }
                }
            }>
                <Stack.Screen
                    name='FoodList'
                    component={FoodList}
                    options={({navigation}) =>{
                        return {
                            title:"Lista de Comidas",
                            headerRight:() =>(
                                <Button
                                    onPress={() => navigation.navigate("FoodForm")}
                                    type='clear'
                                    icon={<Icon name="add" size={25} color="white"/>}
                                />
                            )
                        }
                    }
                }
                >

                </Stack.Screen>
                <Stack.Screen name='FoodForm' component={FoodForm}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}