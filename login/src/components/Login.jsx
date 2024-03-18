import React, { useState } from "react";
import {SafeAreaView, View,Text,Image, TextInput, StyleSheet, Button} from 'react-native';
import Estilo from './estilo'

export default props =>{

    const [text,setText] = useState('');
    const [senha, setSenha] = useState('');
    const [entrar, setEntrar] = useState('');
    const [sair, seSair] = useState('');

    


    return(
        <SafeAreaView>
            <Image style={style.Image} source={require('./image/logoConfeitaria.png')}/>
            <TextInput
            style={style.input}
            label= 'Usuário'
            value={text}
            onChangeText={text => setText (text)}
            maxLength={20}
            placeholder="Insira seu usuário"
            />
            <TextInput
            style={style.input}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry= {true}
            placeholder="Insira sua senha"
            maxLength={20}
            />
            <Text style={style.txt}>Nâo tem conta? Clique Aqui.</Text>
            <View>   
            <Button style={style.btn} color={'#e884aa'}title="Entrar" />  
            </View> 
            <Button 
            color={'#e884aa'}
            title="Sair" />        

        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        input:{
            backgroundColor: '#eba9c2',
            width: 190,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginTop:50,
            borderColor:'#ffff',
            
        },
        Image:{
            alignItems:"center",
            justifyContent:'center',
            marginTop:100,
            borderWidth:1,
            padding:10, 
        },
        txt:{
            marginBottom:10,
            marginTop:10,
        },
        btn:{
            marginBottom:15,
        }
       
    }
)



