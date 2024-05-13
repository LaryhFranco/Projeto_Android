import React from "react";
import { View,Text, Pressable, Image, ImageBackground, StyleSheet, ImageBackgroundBase } from "react-native";

export default props => {
    return(
        <View style={{flex:1,}}>
            <ImageBackground
                source={require('./Image/krustyland.png')}
                style={style.imgBack}
                >
                <View style={style.tit}>
                    <View>
                        <Text style={style.txt}>Unforgotten</Text>
                    </View>
                        <View>
                            <Text style={style.txt}>Experiences</Text>
                        </View>
                </View>
                    <View style={style.btnContainer}>
                        <Pressable style={style.btn} onPress={() => props.navigation.navigate("Home")}>
                            <Text style={style.txtBtn}>Continue</Text>
                        </Pressable>
                    </View>
            </ImageBackground>
                
                
            
        </View>
    )
}

const style = StyleSheet.create (
    {
        imgBack:{
            flex:1,
            resizeMode:'cover',
        },
        tit:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
            
        },
        txt:{
            color:'#fff',
            fontSize:30,
            marginBottom:2,
            fontWeight:'bold',
          },
        txtBtn:{
            color:'#fff',
            fontSize:18,
          },
          btn:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"#ed3939",
            height:45,
            width:"70%",
            borderRadius:9,
          },
          btnContainer:{
            alignItems:'center',
            justifyContent:'center',
            marginTop:"150%",
          }
    }
)