import React from "react";
import { View, Text,Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            >Favorite</Text>
            <Icon name="heart-sharp" size={30} color="#b434eb"/>
            <Button title="Go to Shared" onPress={() => props.navigation.navigate('Shared')}/>
        </View>
    )
}