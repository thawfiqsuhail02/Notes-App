import React,{useState,useContext} from 'react'
import {StyleSheet,Text,View,TextInput, Button} from 'react-native'
import {Notecontext} from '../context/Notescontext'

const Editnote=({navigation,route})=>{
    const {id}=route.params
    const {state,dispatch}=useContext(Notecontext)
    const data=state.find((record)=>{
        return id===record.id
    })
    const [title,settitle]=useState(data.title)
    const [content,setcontent]=useState(data.content)
    return(
        <View style={{flex:1,margin:8}}>
            <Text style={{fontSize:18,color:"#00aaff"}}>Change Title:</Text>
            <TextInput
                value={title}
                onChangeText={(text)=>settitle(text)}
                style={styles.inputtext}
            />
            <Text style={{fontSize:18,color:"#00aaff"}}>Change Content:</Text>
            <TextInput
                value={content}
                onChangeText={(text)=>setcontent(text)} 
                style={styles.inputtext}
                numberOfLines={4}
                multiline={true}
            />
            <View style={{width:"50%",margin:15,marginLeft:75}}>
                <Button
                    title="Update Note"
                    mode="contained"
                    onPress={()=>{
                        dispatch({type:"UPDATE",payload:{id:id,title:title,content:content}})
                        navigation.navigate("Notes")
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

export default Editnote