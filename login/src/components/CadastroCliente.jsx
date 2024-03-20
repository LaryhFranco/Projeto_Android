import React, { useState } from "react";
import {SafeAreaView, View,Text,Image, TextInput, StyleSheet, Button} from 'react-native';

export default props =>{

    const [nome,setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereço, setEndereço] = useState('');
    const [numero,setNumero ] = useState('');
    const [cep,setCep ] = useState('');
    const [cidade,setCidade ] = useState('');
    const [estado,setEstado ] = useState('');

    return(
        <SafeAreaView>
            <View style={[style.container2 ]}>
            <Image style={style.Image}source={require('./image/logoConfeitaria.png')}/>
            <Text style={style.txtG}>Cadastro de Clientes</Text>
            </View>

            <TextInput
            style={style.input1}
            label="nome"
            value={nome}
            onChangeText={usuario =>setNome (usuario)}
            maxLength={30}
            placeholder="Insira seu nome"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            />
            <TextInput
            style={style.input2}
            label="email"
            value={email}
            onChangeText={email => setEmail (email)}
            keyboardType="email-address"
            placeholder="Insira seu email"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            />
            <TextInput
            style={style.input3}
            label="telefone"
            value={telefone}
            onChangeText={telefone => setTelefone (telefone)}
            placeholderTextColor={`#fff`}
            color={`#fff`}
            placeholder="Telefone"
            keyboardType="phone-pad"
            maxLength={11}
            />
            <TextInput
            style={style.input2}
            label="endereço"
            value={endereço}
            onChangeText={endereço => setEndereço (endereço)}
            placeholderTextColor={`#fff`}
            color={`#fff`}
            placeholder="Endereço"
            />
            <View style={style.container1}>
            <TextInput
            style={style.input4}
            label="numero"
            value={numero}
            onChangeText={numero => setNumero (numero)}
            placeholder="Número"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            keyboardType="numeric"
            maxLength={8}
            />
            <TextInput
            style={style.input4}
            label="cep"
            value={cep}
            onChangeText={cep => setCep (cep)}
            placeholder="CEP"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            keyboardType="numeric"
            maxLength={8}
            />
            </View>
        
            <View style={style.container3}>
            <Button color={'#e884aa'}
            title="Cadastrar" />  
            <Button color={'#e884aa'}
            title="Alterar" />  
            </View>
            <View style={style.container4}>
            <Button style={style.btn}color={'#e884aa'}
            title="Excluir" />  
            <Button color={'#e884aa'}
            width={0}
            title="Pesquisar" />  
            </View>
            
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        input1:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 350,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginLeft:30,
            marginTop:50,
            borderColor:'#ffff',
        },
        Image:{
            marginTop:50,
            padding:80,            
        },
        input2:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 350,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginLeft:30,
            marginTop:20,
            borderColor:'#ffff',
        },
        input3:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 170,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginLeft:30,
            marginTop:20,
            borderColor:'#ffff',
        },
        input4:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 170,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginTop:5,
            borderColor:'#ffff',
        },
        container1:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            padding:15,
            marginLeft:15,
            marginRight:15, 
            marginBottom:10,

        },
        container2:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        container3:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft:90,
            marginRight:100,
            marginBottom:10,
        },
        container4:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft:90,
            marginRight:100,
        },
        txtG:{
            fontSize:20,
            marginRight:30,
            color: "#fff"
        },
       
    }
)