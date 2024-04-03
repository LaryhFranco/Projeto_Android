import React from "react";
import { View,Text, StyleSheet, Pressable, } from "react-native";

export default props => {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#d5a2fc",
            }}>
                <View >
                    <View >
                       <Pressable style={style.button} onPress={()=> props.navigation.navigate("Locations")}>
                        <Text style={style.txtCid}>Paris</Text>
                        <Text>France</Text>
                       </Pressable>
                    </View>
                </View>
                <View style={style.container1}>
                    <View >
                       <Pressable style={style.button} onPress={()=> props.navigation.navigate("Locations")}>
                        <Text style={style.txtCid}>Tokyo</Text>
                        <Text>Japan</Text>
                       </Pressable>
                    </View>
                </View>
                
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtCid:{
            fontSize:20,
            color:"#af47ff"
        },
        container1:{
            height:50,
            marginTop:3,
        },
        button:{
            paddingHorizontal:0,
            backgroundColor:"#fff",
            height:70,
            justifyContent:'center',
        }
    }
)
