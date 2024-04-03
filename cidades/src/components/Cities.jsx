import React from "react";
import { View,Text,StyleSheet,TextInput,Button} from "react-native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default props => {
    return( 
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#d5a2fc",
        }}>
            <Text style={style.txt}>Cities</Text>
            <TextInput 
            style={style.input}
            label="Cities"
            color={"#fff"}
            placeholder="Cidade"
            placeholderTextColor={`#fff`}
            />
            <TextInput 
            style={style.input}
            label="País"
            color={"#fff"}
            placeholder="País"
            placeholderTextColor={`#fff`}
            />
            <View style={[style.button]}>
                <Button title="Add City" color={"#c278fa"} onPress={()=> props.navigation.navigate("Lista")}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        input:{
            backgroundColor: '#c278fa',
            width: "95%",
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginTop:20,
            borderColor:'#ffff',
        },
        txt:{
            fontSize:50,
            color:"#fff"
        },
        button:{
            marginTop:15,
            width:150,
            
        },
    }
)