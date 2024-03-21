import React from "react";
import {SafeAreaView, View,Text,Image, TextInput, StyleSheet} from 'react-native';

export default props =>{


    return(
        <SafeAreaView>
            <View>
            <Image style={style.Image}source={require('./image/logoConfeitaria.png')}/>
            <Text style={style.txtG}> Menu Principal </Text>
            </View>
            <View style={style.fundo}>
                 <Text style={style.sobre}>Sobre Nós</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        Image:{
            marginTop:30,
            padding:80,            
        },
        txtG:{
            fontSize:20,
            color: "#fff",
            
        },
        fundo:{
            backgroundColor: '#eba9c2',
            height:100,
            width:100,
            borderRadius:20,
            borderWidth: 1,
            borderColor:'#ffff',
            alignItems:'center',
            justifyContent:'center'
            
        },
        sobre:{
            color:'#e67ea5',
            fontSize:15,
        }
    }

)