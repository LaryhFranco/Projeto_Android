import React, { useState } from "react";
import { View,Text, Pressable,Image, StyleSheet, TextInput
 } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View style={style.container}>
            <Image style={style.Image} source={require('./Image/logo-Xbox.png')}/>
                <Text style={style.txtLogin}>Login</Text>
                    <View  style={style.input}>
                        <Icon style={style.Icon} name='at-outline' size={25} color="#fff"/>
                        <TextInput
                            style={style.input}
                            label="email"
                            value={email}
                            onChangeText={email => setEmail (email)}
                            keyboardType="email-address"
                            placeholder="Email ID"
                            placeholderTextColor={'#a8a8a8'}
                        />
                    </View>
                        <View style={style.separador}>
                    </View>
                            <View style={style.input}>
                            <Icon style={style.Icon}name="lock-closed-outline" size={25} color="#fff"/>
                                
                                <TextInput
                                    style={style.input}
                                    onChangeText={setSenha}
                                    value={senha}
                                    secureTextEntry= {true}
                                    placeholder="Password"
                                    maxLength={20}
                                    placeholderTextColor={'#a8a8a8'}     
                                />  
                                    <Text style={style.txtInp}>Forgot?</Text>
                                </View>
                                    <View style={style.separador}></View>
                                        <Pressable 
                                        style={style.btn}>
                                            <Text style={style.txtBtn}>Login</Text>
                                        </Pressable>
                                            <View>
                                                <Text style={style.txtOr}>Or, login with...</Text>
                                            </View>
                                        <View style={style.pressContainer}>
                                            <Pressable style={style.press}>
                                                <Image source={require('./Image/google.png')}/>
                                            </Pressable>
                                                <Pressable style={style.press}>
                                                    <Image source={require('./Image/facebook.png')}/>
                                                </Pressable>
                                                <Pressable style={style.press}>
                                                    <Image source={require('./Image/twitter.png')}/>
                                                </Pressable>
                                                    
                                        </View>
                                            <View>
                                                <Text style={style.txtN}>New to the app? <Text onPress={() => props.navigation.navigate("register")} style={style.registerText}>Register</Text></Text>
                                            </View>
                                        
        </View>
    )
}

const style = StyleSheet.create(
    {
        Image:{
            marginLeft:90,
            marginTop:90,
            marginBottom:50,
        },
        txtLogin:{
            fontSize:25,
            marginLeft:20,
            color:"#fff",
            marginBottom:20,
        },
        txtInp:{
             marginLeft:100,
             color:"#16871d",
             fontWeight:'bold'
         },
        input:{
            marginRight:100,
             fontSize:15,
             flexDirection:'row',
             alignItems:'center',
             color:'#a8a8a8',
        },
        Icon:{
            marginLeft:16,
        },
        container:{
            backgroundColor:'#313133',
            flex:1, 
        },
        separador:{
            height:1,
            marginLeft:20,
            width:'90%',
            backgroundColor:'gray',

        },
        btn:{
            marginLeft:'10%',
            borderRadius:5,
            justifyContent:'center',
            marginTop:40,
            width:"80%",
            height:50,
            alignItems:'center',
            backgroundColor:"#16871d",
        },
        txtBtn:{
            color:"#fff",
            fontSize:18,

        },
        txtOr:{
            marginLeft:'40%',
            marginTop:15,
            color:"#a8a8a8",
            marginBottom:15,
        },
        press:{
            
            height:40,
            borderWidth:1,
            borderRadius:4,
            alignItems:'center',
            justifyContent:'center',
            width:'30%',
            backgroundColor:'#313133',
            borderColor:'gray',
            marginLeft:'20%'   
        },
        pressContainer:{
            marginLeft:50,
            marginRight:100,
            flexDirection:'row',
            justifyContent:'center'
            
        },
        txtN:{
            marginLeft:'30%',
            marginTop:15,
            color:"#a8a8a8",
            marginBottom:15,
        },
        registerText:{
            color:"#16871d",
        }
        
    }
)
