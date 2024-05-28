import React from 'react';
import { View, Text, Button } from 'react-native';


export default props => {

    const pessoas = [
        {
            nome:'Laryssa',
            idade:17,
        },
        {
            nome:'Tiago',
            idade:18,
        },
        {
            nome:'Iris',
            idade:15,
        },
        {
            nome:'Luna',
            idade:25,
        },
    ];

    const maiores = pessoas.filter(pessoa => pessoa.idade >= 18);
    const menores = pessoas.filter(pessoa => pessoa.idade < 18);

    return(
        <View style={{flex:1,}}>
            <Text>Maiores de 18</Text>   
                <View>
                      {maiores.map(pessoa =>(
                        <View key={pessoa.nome}>
                            <View>
                                <Text>{pessoa.nome}</Text>
                                <Text>{pessoa.idade}</Text>
                            </View>
                        </View>
                      ))}  
                      <Text>Menores de 18</Text>
                        <View>
                            {menores.map(pessoa =>(
                                <View key={pessoa.nome}> 
                                    <View> 
                                        <Text>{pessoa.nome}</Text>
                                        <Text>{pessoa.idade}</Text>
                                    </View> 
                                </View> 
                            ))}
                        </View>
                </View>   
                
        </View>
       
    );
}



