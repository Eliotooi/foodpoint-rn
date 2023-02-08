import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'

import styles from './style'

export const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={require('./logo.png')} />
        <Text style={styles.title}>Food Point</Text>
      </View>
      <ActivityIndicator size='large' />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}
