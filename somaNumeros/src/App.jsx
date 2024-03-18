import React from "react";
import {Text,View,StyleSheet} from 'react-native';
// import SomaNumeros from "./components/SomaNumeros";
import EntradaText from "./components/EntradaText";

export default () => {
    return(
        <View style={style.fundo}>
            {/* <SomaNumeros num1 = {100} num2 = {50}/> */}
             <EntradaText/> 
        </View>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            flexGrow:1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)