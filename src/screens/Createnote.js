import React,{useState,useContext} from 'react'
import {StyleSheet,Text,View,TextInput, Button} from 'react-native'
import {Notecontext} from '../context/Notescontext'

const CreateNote=(props)=>{
    const [title,settitle]=useState("")
    const [content,setcontent]=useState("")
    const {state,dispatch}=useContext(Notecontext)

    return(
        <View style={{flex:1,margin:8}}>
            <Text style={{fontSize:18,color:"#00aaff"}}>Enter Title:</Text>
            <TextInput
                value={title}
                onChangeText={(text)=>settitle(text)}
                style={styles.inputtext}
            />
            <Text style={{fontSize:18,color:"#00aaff"}}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={(text)=>setcontent(text)} 
                style={styles.inputtext}
                numberOfLines={4}
                multiline={true}
            />
            <View style={{width:"50%",margin:15,marginLeft:75}}>
                <Button
                title="Save"
                mode="contained"
                onPress={()=>{
                    dispatch({type:"ADD",payload:{title:title,content:content}})
                    props.navigation.goBack()
                }} 
            />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    inputtext:{
        fontSize:15,
        borderWidth:1,
        borderColor:"black",
        margin:5,
        borderRadius:0.5
    }
})

export default CreateNote