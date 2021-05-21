import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Listnotes from './src/screens/Listnotes'
import {Noteprovider} from './src/context/Notescontext'
import Createnote from './src/screens/Createnote'
import Shownote from './src/screens/Shownote'
import Editnote from './src/screens/Editnote'

const Stack=createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Notes" 
          component={Listnotes}
          options={{
            headerTitleAlign:"center",
            title:"TODO List"
          }} 
        />
        <Stack.Screen 
          name="Create" 
          component={Createnote}
          options={{
            headerTitleAlign:"center",
            title:"Create TODO"
          }} 
        />
        <Stack.Screen 
          name="Show" 
          component={Shownote}
          options={{
            headerTitleAlign:"center",
            title:"TODO Notes"
          }} 
        />
        <Stack.Screen 
          name="Edit" 
          component={Editnote}
          options={{
            headerTitleAlign:"center",
            title:"Edit TODO Note"
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ()=>{
  return(
    <Noteprovider>
      <App />
    </Noteprovider>
  )
}