import React from "react";
import { View, Text, Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default props =>{
    return(
        <View style={
            {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            }
        }>
            <Text>Details!</Text>
            <Icon name="desktop-outline" size={20} color="#b434eb"/>
            <Button title="Go to Favorite" onPress={() => props.navigation.navigate('Favorite')}/>
        </View>
    )
}