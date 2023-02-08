import React, { useEffect } from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import { useDispatch } from 'react-redux'

import { setFilterType } from '../../redux/actions'
import styles from './style'

const switchoptions = [
  {
    customIcon() {
      return (
        <Image
          style={styles.img}
          source={require('./SwitcherIcon/coffee.png')}
        />
      )
    },
    label: 'Drinks',
    value: 'Drinks'
  },
  {
    customIcon() {
      return (
        <Image
          style={styles.img}
          source={require('./SwitcherIcon/pizza.png')}
        />
      )
    },
    label: 'Pizza',
    value: 'Pizza'
  },
  {
    customIcon() {
      return (
        <Image
          style={styles.img}
          source={require('./SwitcherIcon/sweet.png')}
        />
      )
    },
    label: 'Sweets',
    value: 'Sweets'
  }
]

export default function Switcher() {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setFilterType(''))
    }
  }, [dispatch])

  return (
    <View style={styles.container}>
      <SwitchSelector
        style={styles.switchContainer}
        buttonColor='#888'
        selectedColor='white'
        textColor='black'
        textContainerStyle={styles.switcherTextContainerStyle}
        selectedTextContainerStyle={
          styles.switcherSelectedTextContainerStyle
        }
        borderColor='whitesmoke'
        backgroundColor={'whitesmoke'}
        fontSize={12}
        height={50}
        hasPadding
        options={switchoptions}
        onPress={(value) => {
          dispatch(setFilterType(value))
        }}
      />
      <TouchableOpacity
        style={styles.allType}
        onPress={() => {
          dispatch(setFilterType(' '))
        }}
      >
        <Text style={styles.allTypeText}>All Type</Text>
      </TouchableOpacity>
    </View>
  )
}
