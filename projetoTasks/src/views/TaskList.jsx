import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, View } from "react-native";
 
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyle from "./commonStyle";
 
import Task from "../components/Task";
 
export default props => {
     
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
 
    return (
        <SafeAreaView style={style.container} >
            <ImageBackground source={todayImage} style={style.background} >
                <View style={style.titleBar} >
                    <Text style={style.title} >Hoje</Text>
                    <Text style={style.subTitle} >{today}</Text>
                </View>
            </ImageBackground>
 
            <View style={style.taskList} >
                <Task
                  descricao="Comprar livro"
                  dataEstimada={new Date()}
                  concluidaEm={new Date()}
                />
 
                <Task
                  descricao="Ler livro"
                  dataEstimada={new Date()}
                  concluidaEm={null}
                />
                <Task
                  descricao="Arrumar guarda roupa "
                  dataEstimada={new Date()}
                  concluidaEm={null}
                />
            </View>
        </SafeAreaView>
    )
}
 
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar:{
        flex:1,
        justifyContent:'flex-end'
    },
    title:{
        fontFamily: commonStyle.fontFamily,
        fontSize:50,
         color: commonStyle.colors.secundary,
         marginLeft:20,
         marginBottom:20
    },
    subTitle:{
        fontFamily: commonStyle.fontFamily,
        fontSize:20,
        color: commonStyle.colors.secundary,
        marginLeft:20,
        marginBottom:20
    }
})