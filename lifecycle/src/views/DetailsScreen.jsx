import React from "react";
import { View,Text,Button } from "react-native";

export default props => {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
            <Text>Details</Text>
            <Button
                title="Go to Details... again"
                onPress={() => props.navigation.push('Details')}
            />
        </View>
    )
} 