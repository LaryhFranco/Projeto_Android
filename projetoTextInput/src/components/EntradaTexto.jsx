import React, { useState } from "react";
import {View,Text, TextInput, StyleSheet} from 'react-native';
import Estilo from './estilo'

export default props =>{

    const [text, setText] = useState('')

    return(
        <View>
            <Text style={Estilo.TxtG}>Entrada de Texto</Text>
            <TextInput 
                style={style.input}
                label = 'Email'
                value={text}
                onChangeText={text => setText (text)}
                maxLength={20}
                placeholder="Insira seu email"
                keyboardType="email-address"
                multiline ={true}
                />
                <TextInput style={style.input}
                    secureTextEntry= {true}
                />
        </View>
    )
}

const style = StyleSheet.create(
    {
        input:{
            backgroundColor: 'grey',
            width: '100%',
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
        }
    }
)