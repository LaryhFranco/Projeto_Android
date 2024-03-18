import React, {useState} from "react";
import {Text,View,Button} from 'react-native';
import estilo from "./estilo";

export default props =>{

//   let num1 = props.num1
//   let num2 = props.num2

    // function somar (){
    //     console.warn(num1 + num2)
    // }

    //A seguir construimos o destruction 
    const[num1, setNum1] = useState(props.num1)
    const[num2, setNum2] = useState(props.num2)
    const[resultado, setResultado] = useState(0)

    const somar = () =>{
        setResultado(num1+num2);
         
    }

    return(
        <View>
            <Text style={estilo.txtG}>Valor 1: </Text>
            <Text style={estilo.txtG}>{num1}</Text>
            <Text style={estilo.txtG}>Valor 2: </Text>
            <Text style={estilo.txtG}>{num2}</Text>
            <Button title="Somar" onPress={somar} />
            <Text style={estilo.txtG}>Resultado:</Text>
            <Text style={estilo.txtG}>{resultado}</Text>
        </View>
    )
}


