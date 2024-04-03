import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props =>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor:"#d5a2fc",
        }}>
            <View>
                <Text
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fff',
                    width:420,
                    height:300,
                    
                }}
                
                >No locations for this city!</Text>
            </View>
        </View>
    )
}


