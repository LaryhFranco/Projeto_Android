import React from "react";
import { View,Text, Pressable,Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return(
        <View style={style.container}>
            <Text style={style.txt}>GAMEON</Text>
                <Image style={style.Image} source={require('./Image/logo-Xbox.png')}/>
                    <View style={{flex:1,}}>
                        <Pressable style={style.btn} onPress={() => props.navigation.navigate("login")}>
                            <View style={{flexDirection:"row", justifyContent:'space-between', }}>
                                <Text style={style.txtBtn}>Let's Begin</Text>
                                <Icon style={{marginRight:10,}} name="chevron-forward" size={20} color="#fff"/>
                            </View>
                        </Pressable>
                    </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        Image:{
            marginLeft:90,
            marginTop:150,
            marginBottom:110,
        },
        txt:{
            fontWeight:'bold',
            fontSize:30,
            marginLeft:130,
            marginTop:50,
            color:"#050505"
        },
        txtBtn:{
            marginLeft:10,
            color:"#fff",
            fontSize:20,

        },
        btn:{
            borderRadius:5,
            justifyContent:'center',
            marginLeft:20,
            marginTop:50,
            width:"90%",
            height:50,
            backgroundColor:"#16871d",
        },
        container:{
            backgroundColor:'#313133',
            flex:1, 
        },
    }
)