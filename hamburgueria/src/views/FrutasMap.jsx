import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';


export default props => {
    const [valor,setValor] = useState("");
    const products = [
        {
            id:1,
            name:'Banana',
            price:1.50, 
            emoji: '🍌'
 
        },
        {
            id:2,
            name:'Laranja',
            price:3.00,  
            emoji: '🍊'
        },
        {
            id:3,
            name:'Tomate',
            price:2.00,  
            emoji: '🍅'
        },
    ];

    const expensiveProducts = products.filter(product => product.price >= valor);

    return(
        <View style={{flex:1,}}>
            {products.map(product => (
                <View key={product.id}> 
                    <View>
                        <Text>{product.name}</Text>
                        <Text>R${product.price}</Text>
                        <Text>{product.emoji}</Text>
                        <Button
                        color={"orange"}
                        title="Comprar"
                        />
                    </View>
                </View>
            ))}
        </View>
       
    )
}