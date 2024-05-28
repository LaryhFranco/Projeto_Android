import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";

export default props => {
     const numbers = [1,2,3,4,5]    

    
    const sum = numbers.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
    }, 0);

    return (
        <View>
            <Text>Números declarados: 1, 2, 3, 4, 5</Text>
            <Text>A soma dos números é {sum}</Text>
        </View>
    )
}