import React,{useContext} from 'react'
import {StyleSheet,Text,View,FlatList,TouchableOpacity} from "react-native"
import {Notecontext} from '../context/Notescontext'
import {AntDesign} from '@expo/vector-icons'

export default function notes(props){
    const {state,dispatch}=useContext(Notecontext)
    return(
        <View style={{flex:1}} >
            <View>
                <TouchableOpacity style={{
                    marginTop:10,
                    alignItems:"center"
                    }} onPress={()=>props.navigation.navigate("Create")} 
                >
                    <AntDesign name="pluscircle" size={45} color="#00aaff" />
                </TouchableOpacity> 
            </View>
            <FlatList
                data={state}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>props.navigation.navigate("Show",{id:item.id})}>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:"space-between",
                                marginHorizontal:10,
                                padding:10,
                                elevation:4,
                                backgroundColor:"white",
                                marginBottom:3,
                                marginVertical:5
                                }}
                            >
                                <Text style={{fontSize:18}}>{item.title}</Text> 
                                <AntDesign name="delete" size={24} onPress={()=>dispatch({type:"REMOVE",payload:item.id})}/>
                            </View>
                        </TouchableOpacity>
                    )
                }} 
                keyExtractor={item=>item.title}
            />
        </View>
    )
}