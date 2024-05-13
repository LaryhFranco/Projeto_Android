import React from "react";
import { View ,Text,Image, StyleSheet, Pressable} from "react-native";
import { create } from "react-test-renderer";

export default props =>{
    return(
        <View style={{flex:1,}}>
            <View style={style.contback}>
                <View style={style.contPer}>
                    <Text style={style.txtB}>Welcome Back!</Text>
                        <View>
                            <Image style={style.image} source={require('./Image/avatar.png')}/>
                        </View>
                </View>
                        <View style={{position:'relative', top:"-30%"}}>
                                <Text style={style.txt}>Soenemis sulivan</Text>  
                        </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        image:{
            height:60,
            width:60,
            marginHorizontal:'46%'            
        },
        contback:{
            marginTop:"8%",
            marginLeft:'5%',

        },
        contPer:{
            flexDirection:"row",
        },
        txtB:{
            fontWeight:'bold',
            fontSize:19,
            marginTop:'2%',
            color:'black',
            
        },
        txt:{
            color:'gray',

        }
    }
);

