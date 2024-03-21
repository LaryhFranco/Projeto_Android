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
            style={style.input1}
            label="email"
            value={email}
            onChangeText={email => setEmail (email)}
            keyboardType="email-address"
            placeholder="Insira seu email"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            />
            <TextInput
            style={style.input2}
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
            style={style.input1}
            label="endereço"
            value={endereço}
            onChangeText={endereço => setEndereço (endereço)}
            placeholderTextColor={`#fff`}
            color={`#fff`}
            placeholder="Endereço"
            />
            <View style={style.container1}>
            <TextInput
            style={style.input3}
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
            style={style.input3}
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
            <TextInput
            style={style.input1}
            label="cidade"
            value={cidade}
            onChangeText={cidade => setCidade (cidade)}
            placeholder="Cidade"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            />
            <TextInput
            style={style.input1}
            label="estado"
            value={estado}
            onChangeText={estado => setEstado (estado)}
            placeholder="Estado"
            placeholderTextColor={`#fff`}
            color={`#fff`}
            keyboardType="numeric"
            maxLength={8}
            />
        
        <View style={[style.btnCima]}>
            <View style={[style.btnIni]}>
                <Button title="Cadastrar" color={`#e884aa`}/>
            </View>
            <View style={[style.btnIni]}>
                <Button title="Alterar" color={`#e884aa`}/>  
            </View>
            
        </View>
            
            <View style={[style.btnBaixo]}>
            <View style={[style.btnIni]}>
                <Button title="Excluir" color={`#e884aa`}/>
            </View> 
            <View style={[style.btnIni]}>
                <Button title="Pesquisar" color={`#e884aa`}/>
            </View> 
            </View>
            
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        Image:{
            marginLeft:10,
            marginTop:50,
            padding:80,            
        },
        input1:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 350,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginLeft:20,
            marginTop:20,
            borderColor:'#ffff',
        },
        input2:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 170,
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            marginLeft:20,
            marginTop:20,
            borderColor:'#ffff',
        },
        input3:{
            height:40,
            backgroundColor: '#eba9c2',
            width: 170,
            borderWidth: 1,
            borderRadius:10,
            padding: 9,
            marginTop:5,
            borderColor:'#ffff',
            marginRight:10,
            marginLeft:5,   
        },
        container1:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            padding:0,
            marginLeft:15,
            marginRight:15, 
            marginTop:15,
        },
        container2:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        
        txtG:{
            fontSize:20,
            marginRight:30,
            color: "#fff"
        },
        btnCima:{
            alignSelf:'flex-start',
            flexGrow:1,
            flexDirection: 'row',

        },
        btnIni:{
            height:50,
            width:150,
            marginTop:5,
            marginLeft:25,

        },
        btnBaixo:{
            alignSelf:'flex-start',
            flexGrow:1,
            flexDirection: 'row',
            marginTop:2,
        },
    }
)