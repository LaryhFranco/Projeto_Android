import React from "react";
import { View, Text,Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            >Home!</Text>
            <Icon name="home-sharp" size={20} color="#b434eb"/>
            <Button title="Go to Details" onPress={() => props.navigation.navigate('Details')}/>
        </View>
    )
}