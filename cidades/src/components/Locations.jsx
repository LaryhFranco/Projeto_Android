import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default props =>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor:"#d5a2fc",
        }}>
            <View style={{
                    backgroundColor:'#fff',
                    width:420,
                    height:345,
                    marginBottom:3,
                    
                }}>
                <Text
                style={{
                    fontSize:20,
                    marginTop:'74%',
                    marginLeft:90,
                }}
                
                >No locations for this city!</Text>
            </View>
            <View style={{
                    backgroundColor:'#fff',
                    width:420,
                    height:450,
                    
                }}>
               <View>
                    <View >
                       <Pressable  style={style.button} onPress={()=> props.navigation.navigate("Cities")}>
                        <Text style={style.container1}>Location name</Text>
                       </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

style = StyleSheet.create(
    {
    container1:{
        marginLeft:160,
    },
        button:{
            backgroundColor:"#c278fa",
            height:50,
            justifyContent:'center',
            marginTop:300,
        },
    
}
)




