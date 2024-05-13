import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <SafeAreaView>
            <Text>App</Text>
        </SafeAreaView>
    )
}
