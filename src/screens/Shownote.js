import React,{useContext} from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import {Notecontext} from '../context/Notescontext'
import {Foundation} from '@expo/vector-icons'

const Shownote=(props)=>{
    const {id}=props.route.params
    const {state,dispatch}=useContext(Notecontext)
    const note=state.find(record=>{
        return id===record.id
    })
    return(
        <View style={{flex:1,marginTop:8}}>
            <View>
                <TouchableOpacity style={{
                    marginTop:10,
                    paddingLeft:110,
                    flexDirection:"row"
                    }} onPress={()=>props.navigation.navigate("Edit",{id:id})} 
                >
                    <Foundation name="clipboard-pencil" size={38} color="#00aaff" />
                    <Text style={{paddingLeft:10,color:"#00aaff",fontSize:22,fontStyle:"italic",marginTop:5}}>Edit Note</Text>
                </TouchableOpacity> 
            </View>
            <Text style={{...styles.showtext,fontSize:23,marginTop:13}}>{note.title}</Text>
            <Text style={styles.showtext}>{note.content}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    showtext:{
        fontSize:17,
        textAlign:"center",
        margin:8
    }
})

export default Shownote