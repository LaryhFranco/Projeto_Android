import React from "react";
import { View , StyleSheet} from "react-native";

import Login from './components/Login'
import CadastroCliente from "./components/CadastroCliente";

export default ()=>{
    return(
        <View style={style.fundo}>
            {/* <Login/>  */}
            <CadastroCliente/>
            
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