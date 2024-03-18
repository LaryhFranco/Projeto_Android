import React from "react";
import { View , StyleSheet} from "react-native";

import Login from './components/Login'

export default ()=>{
    return(
        <View style={style.fundo}>
            <Login/>
        </View>
    )
}

const style = StyleSheet.create (
    {
        fundo:{
            alignItems: 'center',
            flexGrow:1,
            backgroundColor: '#edbed0',
        }
    }
)