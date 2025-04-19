import React , {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login';
import FlashMessage from 'react-native-flash-message';
import BottomTab from './bottomTab';
import { checkAuth } from '../redux/authSlice';
import { useDispatch ,  useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  },[])

  const { token } = useSelector(state => state.auth);
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
        {token ?   <Stack.Screen name="BottomTab" component={BottomTab} /> :    <Stack.Screen name="LoginScreen" component={LoginScreen} />  }
   </Stack.Navigator>
   <FlashMessage position={'bottom'} />
    </NavigationContainer>
  
  )
}