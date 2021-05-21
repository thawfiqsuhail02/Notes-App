import React,{createContext, useReducer} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import {reducer,initstate} from '../reducer/Notesreducer'

export const Notecontext=createContext()

export const Noteprovider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initstate)
    return(
        <Notecontext.Provider value={{state,dispatch}}>
            {children}
        </Notecontext.Provider>
    )
}