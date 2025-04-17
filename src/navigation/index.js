import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login';
import FlashMessage from 'react-native-flash-message';
import BottomTab from './bottomTab';
const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />  
      <Stack.Screen name="BottomTab" component={BottomTab} />     
   </Stack.Navigator>
   <FlashMessage position={'bottom'} />
    </NavigationContainer>
  
  )
}