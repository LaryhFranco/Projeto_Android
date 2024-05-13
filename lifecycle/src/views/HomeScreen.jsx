import React from "react";
import { View,Text, Button } from "react-native";

export default props => {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
            <Text>Home</Text>
            <Button 
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )
}