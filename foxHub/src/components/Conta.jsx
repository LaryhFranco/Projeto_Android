import React, { useState } from "react";
import { View,Text, StyleSheet, SafeAreaView, Image, TextInput, Pressable} from "react-native";


export default props => {

    const [email,setEmail] = useState ('');
    const [senha, setSenha] = useState('');

    return(
        <SafeAreaView>
            <View>
            <Image style={style.image} source={require('./Image/FOXHUB_Logo.png')}/>
            </View>
            <View>
                <Text style={{fontWeight: "bold", color:'black', fontSize:30}}>
                    Welcome back,
                </Text>
                <View>
                    <Text style={{marginBottom:20,}}>Sing in to continue</Text>
                </View>
            </View>
                <TextInput
                    style={style.input}
                    label='email'
                    value={email}
                    onChangeText={email => setEmail (email)}
                    keyboardType="email-address"
                    placeholder="Email"
                />
                <TextInput
                    style={style.input2}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry= {true}
                    placeholder="Password"
                    maxLength={20}
                />
                    <View>
                        <Pressable></Pressable>
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
        },
        txtG:{
            fontSize:30,
        },
        input:{
            width: "100%",
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginTop:40,
            borderColor:'black',
        },
        input2:{
            width: "100%",
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginTop:20,
            borderColor:'black',
        },
        pressable:{
            
        }
    }
)