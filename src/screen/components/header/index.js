import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Renzo!</Text>
      <Text style={styles.subTitle}>Are you ready to dance?</Text>
    </View>
  )
}