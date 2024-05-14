import React from "react";
import{ View, FlatList, StyleSheet,Button } from "react-native"
import food from "../data/food";
import { ListItem,Avatar,ThemeProvider} from "@rneui/themed";

export default props => {

    function getFoodItem({item:food}){


        return(
            <ThemeProvider>
                <ListItem style={style.list}>
                    <Avatar source={{uri: food.avatarURL}}/>
                        <ListItem.Content>
                            <ListItem.Title>{food.name}</ListItem.Title>
                            <ListItem.Title>{food.descricao}</ListItem.Title>
                            <ListItem.Title>{food.descri}</ListItem.Title>
                            <ListItem.Title style={style.price}>{food.price}</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron 
                            name="remove-circle"
                            color='orange'
                            size={20}
                            onPress={
                                ()=> props.navigation.navigate('FoodForm', food)
                        }/>
                            <ListItem.Content style={{marginRight:"-60%",}}>                            
                                <ListItem.Title>{food.quant}</ListItem.Title>
                            </ListItem.Content>

                        <ListItem.Chevron 
                            name="add-circle"
                            color='orange'
                            size={20}
                            onPress={
                                ()=> props.navigation.navigate('FoodForm', food)
                        }/>
                              
                </ListItem>
            </ThemeProvider>
            
        )
    }

    return (
        <View style={style.fundo}>
          <FlatList 
                keyExtractor={food => food.id.toString()}
                data={food}
                 renderItem={getFoodItem}
          />  
          <Button
                color={"green"}
                title="Continue"
                onPress={()=> { 
                 props.navigation.navigate("FoodForm")
                  }}
        />
        </View>
    )
}
 
const style = StyleSheet.create(
    {
        fundo:{
            padding:12,
        },
        list:{
            marginBottom:15,
        
        },
        price:{
            color:"green"
        },
        
    }
)