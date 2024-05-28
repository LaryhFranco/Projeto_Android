import React from "react";
import { StyleSheet, Text,View } from "react-native";

export default props =>{
    return(
        <View style={style.fundo}>
            <Text>Ou</Text>
        </View>
    )
}


const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor:"#6352d1",
            flex:1,
        }
    }
)