import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './style'

export default function Menu({ itemInfo, onItemPress }) {
  const isInStock = itemInfo.stock > 0

  return (
    <View>
      <TouchableOpacity disabled={!isInStock} onPress={onItemPress}>
        <View style={styles.container}>
          <View style={isInStock ? styles.item : styles.disabled}>
            <Image style={styles.img} src={itemInfo.imageUrl} />
            <Text style={styles.titleItem}>{itemInfo.title}</Text>
            <View style={styles.info}>
              <Text style={styles.price}>${itemInfo.price}</Text>
              <Text style={styles.stock}>
                {isInStock
                  ? `Stock: ${itemInfo.stock}`
                  : 'Out of stock'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
