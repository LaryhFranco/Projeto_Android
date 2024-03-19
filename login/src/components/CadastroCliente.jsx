import React, { useState } from "react";
import {SafeAreaView, View,Text,Image, TextInput, StyleSheet, Button} from 'react-native';

export default props =>{

    const [nome,setNome] = useState('');
    const [email, setEmail] = useState('');


    return(
        <SafeAreaView>
            <Image style={style.Image}source={require('./image/logoConfeitaria.png')}/>
            <TextInput
            style={style.input}
            label="nome"
            value={nome}
            onChangeText={usuario =>setNome (usuario)}
            maxLength={50}
            placeholder="Insira seu nome"
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        input:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 350,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginLeft:15,
            marginTop:50,
            borderColor:'#ffff',
        },
        Image:{
            marginEnd:220,
            marginTop:50,
            padding:80,            
        },

    }
)