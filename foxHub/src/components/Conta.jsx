import React, { useState } from "react";
import { View,Text, StyleSheet, SafeAreaView, Image, TextInput, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    const [email,setEmail] = useState ('');
    const [senha, setSenha] = useState('');

    return(
        <SafeAreaView>
            <View>
            <Image style={style.image} source={require('./Image/FOXHUB_Logo.png')}/>
            </View>
            <View>
                <Text style={style.txtG}>
                    Welcome back,
                </Text>
                <View>
                    <Text style={{marginBottom:20, marginLeft:20,}}>Sing in to continue</Text>
                </View>
            </View>
            <View  style={style.input}>
                        <Icon style={style.icon} name='mail-outline' size={20} color="gray"/>
                        <TextInput
                            style={style.input}
                            label="email"
                            value={email}
                            onChangeText={email => setEmail (email)}
                            placeholder="Email"
                            placeholderTextColor={'#a8a8a8'}
                        />
                    </View>

                        <View style={style.separador}></View>
                    
                    <View style={style.input3}>
                    <Icon style={style.icon} name='bag-remove' size={20} color="gray"/>
                        <TextInput
                        style={style.input2}
                        label="senha"
                        value={senha}
                        onChangeText={Senha => setSenha (senha)}
                        placeholder="Senha"
                        placeholderTextColor={'#a8a8a8'}
                        />
                    </View>

                        <View style={style.separador}></View>
                
                    <View style={style.view}>
                        <Pressable style={style.press}>
                            <Text style={style.txtPress}>Sing In</Text>
                        </Pressable>
                            <View>
                                <Text style={style.txtOr}>Or</Text>
                            </View>
                            <View style={style.pressContainer}>
                                    <Pressable style={style.press1}>
                                            <Text>Sing in with </Text>
                                                <Image source={require('./Image/google.png')}/>
                                    </Pressable>
                                    <Pressable style={style.press1}>
                                        <Text>Sing in with </Text>
                                        <Image source={require('./Image/facebook.png')}/>
                                    </Pressable>
                            </View>
                                <View>
                                    
                                </View>
                    </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor:"#ffff",
        },
        image:{
            marginTop:60,
            marginBottom:60,
            marginLeft:20,

        },
        txtG:{
            fontSize:30,
            marginLeft:20,
            fontWeight: "bold", 
            color:'black', 
            fontSize:30
        },
        input:{
            width: 150,
            marginTop:40,
            borderColor:'black',
            fontSize:15,
            flexDirection:'row',
            alignItems:'center',
            color:'#a8a8a8',
        },
        input2:{
            width: 150,
            borderRadius:0,
            marginTop:40,
            fontSize:15,
            flexDirection:'row',
            alignItems:'center',
            color:'#a8a8a8',
        },
        input3:{
            width: 150,
            borderRadius:0,
            marginTop:-20,
            fontSize:15,
            flexDirection:'row',
            alignItems:'center',
            color:'#a8a8a8',
        },
        separador:{
            marginLeft:20,
            height:1,
            width:"90%",
            backgroundColor:'gray',
        },
        separador1:{
            marginTop:-40,
            marginLeft:20,
            height:1,
            width:"90%",
            backgroundColor:'gray',
        },
        press:{
            marginLeft:-40,
            marginTop:50,
            backgroundColor:'blue',
            height:40,
            width:270,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:5,
        },
        txtPress:{
            color:"white",
        },
        view:{
            marginLeft:"30%",
        },
        icon:{
            marginLeft:10, 
            marginTop:40,
        },
        txtOr:{
            marginLeft:'25%',
            marginTop:15,
            color:"black",
            marginBottom:15,
        },
        press1:{
            height:40,
            borderWidth:1,
            borderRadius:4,
            alignItems:'center',
            justifyContent:'center',
            width:'45%',
            backgroundColor:'white',
            borderColor:'gray',
            marginLeft:'10%',  
            flexDirection:"row" 
        },
        pressContainer:{
            marginLeft:-50,
            marginRight:100,
            flexDirection:'row',
            justifyContent:'center'
            
        },
    }
)