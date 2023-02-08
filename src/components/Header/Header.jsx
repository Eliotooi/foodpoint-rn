import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from './style'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={require('./logo.png')} />
        <Text style={styles.title}>Food Point</Text>
      </View>
    </View>
  )
}
