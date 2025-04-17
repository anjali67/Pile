import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { BlankImage } from '../../../assets/icons/image'

export default function LoginHeader() {
  return (
   <View style={styles.innerView}>
              <Text style={styles.title}>Plie</Text>
              <View style={styles.blankView} />
              <View style={styles.imageView}>
                <BlankImage />
              </View>
            </View>
  )
}