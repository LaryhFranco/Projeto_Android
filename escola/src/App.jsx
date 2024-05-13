import 'react-native-gesture-handler';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Aluno from './components/Aluno';
import Faltas from './components/Faltas';
import Notas from './components/Notas';
import Cursos from './components/Cursos';
import Documentacao from './components/Documentacao';
import Ajuda from './components/Ajuda';

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='Ajuda'
                    screenOptions={{
                        drawerActiveBackgroundColor:'#9c21ed',
                        drawerActiveTintColor:'#c37ff0',
                         
                    }}
                >
                    <Drawer.Screen name='Aluno' component={Aluno}/>
                    <Drawer.Screen name='Notas' component={Notas}/>
                    <Drawer.Screen name='Faltas' component={Faltas}/>
                    <Drawer.Screen name='Cursos' component={Cursos}/>
                    <Drawer.Screen name='Documentação' component={Documentacao}/>
                    <Drawer.Screen name='Ajuda' component={Ajuda}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}