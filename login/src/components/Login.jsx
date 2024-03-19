import React, { useState } from "react";
import {SafeAreaView, View,Text,Image, TextInput, StyleSheet, Button, Alert} from 'react-native';
import Estilo from './estilo'

export default props =>{

    const [usuario,setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function autenticar() {
        if (usuario === 'LaryhFranco' && senha === 'La1234'){
            console.warn('Login Sucedido!')
            setUsuario('');
            setSenha('');
        } else 
        console.warn('Login Incorreto!')
    }

    const saida = () => {
        Alert.alert('Sair', 'Tem certeza que deseja sair?', [
          {
            text: 'Cancelar',
            onPress: () => console.warn('Cancelou a saída'),
            style: 'cancel',
          },
          {
            text: 'Sair',
            onPress: () => {
              console.warn('Saiu do aplicativo');
            setUsuario('');
            setSenha('');
            },
          },
        ]);
      };

    return(
        <SafeAreaView>
            <Image style={style.Image} source={require('./image/logoConfeitaria.png')}/>
            <TextInput
            style={style.input}
            color={'#fff'}
            label= 'Usuário'
            value={usuario}
            onChangeText={usuario => setUsuario (usuario)}
            maxLength={20}
            placeholder="Insira seu usuário"
            />
            <TextInput
            style={style.input}
            color={'#fff'}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry= {true}
            placeholder="Insira sua senha"
            maxLength={20}
            />
            <Text style={style.txt}>Nâo tem conta? Clique Aqui.</Text>
            <View>   
            <Button style={style.btn} color={'#e884aa'}title="Entrar" onPress={autenticar}/>  
            </View> 
            <Button color={'#e884aa'} title="Sair" onPress={saida} />        

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
            marginTop:40,
            borderColor:'#ffff',
        },
        Image:{
            marginTop:100,
            padding:84,            
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



