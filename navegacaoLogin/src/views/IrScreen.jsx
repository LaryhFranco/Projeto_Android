import React from "react";
import { Image, Pressable, StyleSheet, Text,View } from "react-native";

export default props => {
    return (
        <View style={style.fundo}>
            <Image style={style.img} source={require('../components/Image/avatar.png')}/>
                <View>
                    <Pressable style={style.btn}>
                        <Text style={style.txt}>Ir</Text>
                    </Pressable>
                </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor:'#f2df61',
            flex:1, 
            justifyContent:"center", 
            alignItems:"center",
        },
        btn:{
            backgroundColor:'#000000',
            width:40,
            height:25,
            alignItems:'center',
            borderRadius:3,
        },
        txt:{
            color:"#f2df61",
            fontSize:18,
        },
        img:{
            position:'relative',
            top:'-20%',
            width:160,
            height:160,
        }
    }
)