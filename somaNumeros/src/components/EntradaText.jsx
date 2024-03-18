import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import estilo from "./estilo";

export default props =>{
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    return(
        <SafeAreaView>
            <Text style={estilo.txtG}>Entrada de Texto :)</Text>
            <TextInput
            style={style.input} 
            onChangeText={onChangeText}
            value={text}
            placeholder="Insira um texto"
            maxLength={50}/>
            <TextInput
            style={style.input} onChangeNumber={onChangeNumber}
            value={number}
            placeholder="Insira um número"
            keyboardType="numeric"
            maxLength={20}/>
        </SafeAreaView>
    )
    
}

const style = StyleSheet.create(
    {
        input:{
            width:150,
            height:40,
            margin:12,
            borderWidth:1,
            padding:10,  
        },
    }
)