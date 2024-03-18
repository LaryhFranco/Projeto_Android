import React from "react";
import {StyleSheet,View} from "react-native";
import Contador from "./components/Contador";

export default () => {
    return(
        <View style={style.fundo}>
            <Contador inicial = {100}/>
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