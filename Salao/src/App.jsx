import 'react-native-gesture-handler';
import React from 'react';
import {  SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PagInicial from './Components/PagInicial';
import { Button } from '@rneui/base';
import  Icon  from 'react-native-vector-icons/Ionicons';
import Ota from './Components/Ota';

const Drawer = createDrawerNavigator();

export default props => {
    return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='inicial' screenOptions={{
                    headerStyle:{
                        backgroundColor:"#6352d1"
                    },
                    headerShadowVisible:false,
                    headerTintColor:"#ffff",
                    headerTitle:"",
                    
                }}>
                    <Drawer.Screen name='inicial' component={PagInicial}
                    options={({navigation})=>{
                        return  {
                                
                                headerRight:()=>(
                                    <Button
                                        onPress={() => navigation.navigate("ota")}
                                        type='clear'
                                        icon={<Icon name="ellipsis-horizontal" size={25} color="white"/>}
                                    />
                                )
                            }
                        }
                    }
                    
                    ></Drawer.Screen>
                    <Drawer.Screen name='ota' component={Ota}></Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
       
    )
}