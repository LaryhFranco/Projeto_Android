import React,{useState} from "react";
import { Text,Button,StyleSheet, TextInput, View } from "react-native";

export default ({route, navigation}) => {
    
    const [food, setFood] = useState (route.params ? route.params : {})

    return(
        <View>
            <Text>asas</Text>
        </View>
    )
}