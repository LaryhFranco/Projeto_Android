import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Produtos from './components/Produtos';
import Receitas from './components/Receitas';
import Pedidos from './components/Pedidos';

const Drawer = createDrawerNavigator();

export default props =>{
    return (
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name='Produtos' component={Produtos}/>
                    <Drawer.Screen name='Receitas' component={Receitas}/>
                    <Drawer.Screen name='Pedidos' component={Pedidos}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}