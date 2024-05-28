import React,{useState} from "react";
import { Text,Button,StyleSheet, TextInput, View } from "react-native";

export default ({route, navigation}) => {
    
    const [food, setFood] = useState (route.params ? route.params : {})

    return(
        <View>
            <Text>Nome</Text>
            <TextInput style={style.input}
            onChangeText={name => setFood({...food,name})}
            placeholder="Insira a Comida"
            value={food.name}
            />
            <Text>Texto</Text>
            <TextInput style={style.input}
            value={food.descricao}
            onChangeText={descricao => setFood({...food, descricao})}
            placeholder="Insira a descrição"
            />
            <TextInput style={style.input}
            value={food.descri}
            onChangeText={descri => setFood({...food,descri})}
            placeholder="Insira a descrição"
            />
            <Text>Valor$</Text>
            <TextInput style={style.input}
            value={food.price}
            onChangeText={price => setFood({...food,price})}
            placeholder="Insira o valor"
            />
            <Text>quant</Text>
            <TextInput style={style.input}
            onChangeText={quant => setFood({...food,quant})}
            placeholder="Insira a quantidade"
            value={food.quant}
            keyboardType="numeric"
            />
            <Text>avatarURL</Text>
            <TextInput style={style.input}
            value={food.avatarURL}
            onChangeText={avatarURL => setFood({...food,avatarURL})}
            placeholder="Insira o avatarURL"
            />
            
            <Button
                title="Salvar"
                onPress={()=> {
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create(
    {
        form:{
            padding:12,
        },
        input:{
            height:40,
            borderColor:"#45494f",
            borderWidth:1,
            marginBottom:15,
        },
    }
)