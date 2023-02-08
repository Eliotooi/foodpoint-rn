import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './style'
import { historySelector } from '../../redux/selectors'

export default function History() {
  const history = useSelector(historySelector)

  return (
    <ScrollView>
      {history.map((item) => (
        <View key={item.id} style={styles.container}>
          <Text style={styles.text}>Date: {item.date}</Text>
          <Text style={styles.text}>Total: {item.total}</Text>
        </View>
      ))}
    </ScrollView>
  )
}
