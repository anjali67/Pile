import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LogoutIcon } from '../../assets/icons/logout'
import { logout } from '../../redux/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { windowHeight } from '../../theme/appConstant'

export default function Profile(props) {
  const  dispatch = useDispatch()

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={ async () => {
       await AsyncStorage.removeItem(`favorites`);
       dispatch(logout());
    }}>
     <LogoutIcon/> 
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
        margin:windowHeight(20),
        alignItems:"flex-end"
  }
})