import React from "react";
import { View,Text, FlatList, Alert, } from "react-native";
import users from "../data/user";
import { ListItem,Avatar,ThemeProvider } from "@rneui/themed";

export default props => {

    function confirmUserDeletion (user){
        Alert.alert("Excluir usuário?", "Deseja excluir o usuário",
        [{
                text:"Sim",
                onPress(){
                    console.log('Usuário deletado' + user.id)
                }
            },
            {
                text:"Não"
            }
        ]
            )
    }

    function getUserItem({item: user}){
        return(
            <ThemeProvider>

                <ListItem
                 bottomDivider onPress={() =>{ props.navigation.navigate('UserForm')}}
                
                >
                <Avatar source={{uri: user.avatarURL}}/> 
                      <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Title>{user.email}</ListItem.Title>
                    </ListItem.Content> 

                     <ListItem.Chevron style={{margin:"0%"}}
                        name="edit"
                        color='orange'
                        size={25}
                        onPress={
                            ()=> props.navigation.navigate('UserForm', user)
                        }/>
                        
                    <ListItem.Chevron style={{margin:"0%"}}
                        name="delete"
                        color='red'
                        size={25}
                        onPress={
                            ()=> confirmUserDeletion(user)
                        }/> 
                </ListItem>
            </ThemeProvider>
                
                    
                 
            
        )
    }
    return (
        <View >
          <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                 renderItem={getUserItem}
                
          />  
        </View>
    )
}

{/* <Avatar source={{ur: user.avatarURL}}/> */}
                    {/* <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Title>{user.email}</ListItem.Title>
                    </ListItem.Content> */}

                    {/* <ListItem.Chevron
                        name="edit"
                        color='orange'
                        size={25}
                        onPress={
                            ()=> props.navigation.navigate('UserForm', user)
                        }/>
                        
                    <ListItem.Chevron
                        name="delete"
                        color='red'
                        size={25}
                        onPress={
                            ()=> confirmUserDeletion(user)
                        }/>*/}