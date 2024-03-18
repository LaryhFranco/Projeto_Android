import React, {useState} from "react";
import {View,Text,Button, Image, StyleSheet} from 'react-native';
import estilo from "./estilo";


export default props => {

    //let numero = props.inicial
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => {
        setNumero(numero + 1)   
    } 
    
    const dec = () => {
        setNumero(numero - 1)
    }

    return(
        <View>
            <Image 
                source={require('./images/Menu.png')} style={images.tamanho}
            />

            <Text style={estilo.txtG}>Contador</Text>
            <Text style={estilo.txtG}>{numero}</Text>
            <Button title="Somar" onPress={inc}/>
            <Button title="subtrair" onPress={dec}/>


        </View>
    );
}

const images = StyleSheet.create(
    {
        tamanho:{
            width:150,
            height:150
        }
    }
)