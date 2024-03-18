import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import EntradaTexto from  './components/EntradaTexto'

export default () =>{
    return (
        <SafeAreaView style={style.fundo}>
            <EntradaTexto/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            alignItems: "center",
            flexGrow:1,
            justifyContent: 'center'
        }
    }
)