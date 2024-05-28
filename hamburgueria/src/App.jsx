import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import  Icon  from 'react-native-vector-icons/Ionicons';
import FoodList from './views/FoodList';
import FoodForm from './views/FoodForm';
import Frutas from './views/FrutasMap';
import PessoasFilter from './views/PessoasFilter';
import FrutasCaras from './views/FrutasCaras';
import CarrinhoReduce from './views/CarrinhoReduce';

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Reduce'
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
                <Stack.Screen name='Fruta' component={Frutas}></Stack.Screen>
                <Stack.Screen name='Pessoas' component={PessoasFilter}></Stack.Screen>
                <Stack.Screen name='FCaras' component={FrutasCaras}></Stack.Screen>
                <Stack.Screen name='Reduce' component={CarrinhoReduce}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}