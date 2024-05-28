import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";

export default props => {
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

    const [cart, setCart] = useState ([])
    const [total, setTotal] = useState(0);

    
    useEffect(() =>{
        const newTotal = cart.reduce((accumulator, currentValue) =>
    accumulator + currentValue.price * currentValue.quantity, 0);
        setTotal(newTotal); 
    }, [cart]);
    

    const handleAddToCart = (item, quantity) => {
        const newCart = [...cart];
        const existingItemIndex = newCart.findIndex(i.id === item.id);

        if (existingItemIndex === -1) {
            setCart([...newCart,{...item, quantity}]);
        }else {
            newCart[existingItemIndex].quantity += quantity;
            setCart(newCart);
        }
    }

    const handlerRemoveFromCart = index => {
        const newCart = [...cart];
        newCart.splice(index,1);
        setCart(newCart)
    }

    return (
        <View>
            <Text>Carrinhos de compras</Text>
            <View>
                {cart.map((item,index) => {
                    <View key={item.id}>
                        
                    </View>
                })}
            </View>
        </View>
    )
}

