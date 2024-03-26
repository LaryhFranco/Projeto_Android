import React from "react";
import { View,Text, StyleSheet } from "react-native";

import Conta from "./components/Conta";

export default () => {
    return(
        <View>
            <Conta/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor:"#ffff",
        },
    }
)
