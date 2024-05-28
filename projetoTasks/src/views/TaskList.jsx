import React from 'react';
import { SafeAreaView,Text, ImageBackground,StyleSheet, View } from 'react-native';

import Task from '../components/Task';

import todayImage from '../../assets/imgs/today.jpg'
import 'moment/locale/pt-br'
import moment from 'moment'
import commonStyle from './commonStyle';

const today = moment().locale('p-br').format('ddd, D [de] MMMM')

export default props => {
    return(
        <SafeAreaView style={style.container}>
            <ImageBackground source={todayImage} style={style.background}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>
            </ImageBackground>
                <View style={style.taskList}>
                    <Task/>
                </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        container:{
            flex:1,
        },
        
        background:{
            flex:3,
        },
        taskList:{
            flex:7,
        },
        titleBar:{
            flex:1,
            justifyContent:'flex-end',
        },
        title:{
            fontFamily:commonStyle.fontFamily,
            fontSize:50,
            color: commonStyle.colors.secundary,
            marginLeft:20,
            marginBottom:20,
        },
        subTitle:{
            fontFamily:commonStyle.fontFamily,
            fontSize:20,
            color: commonStyle.colors.secundary,
            marginLeft:20,
            marginBottom:20,
        },
        
    }
)