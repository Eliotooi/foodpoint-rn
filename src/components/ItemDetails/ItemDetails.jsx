import React, { useState, useMemo } from 'react'
import {
  Text,
  Button,
  View,
  ScrollView,
  Image,
  TextInput,
  Alert
} from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import { useDispatch } from 'react-redux'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import styles from './style'
import { addOrderItem } from '../../redux/actions'
import modificationOptions from './modificationOptions.json'

export default function ItemDetails({ route, navigation }) {
  const { id, url, title, price, stock, type } = route.params
  const dispatch = useDispatch()

  // Set modifications to be selected by default
  const defaultModifications = useMemo(
    () =>
      modificationOptions[type].map((modification) => ({
        name: modification.name,
        label: modification.label,
        value: modification.values[0].value
      })),
    [type]
  )
  const [selectedModifications, setSelectedModifications] =
    React.useState(defaultModifications)

  const [text, onChangeText] = useState('')

  const setModification = (name, value) => {
    const updatedModifications = selectedModifications.map(
      (modification) => {
        if (modification.name === name) {
          return { ...modification, value }
        }

        return modification
      }
    )

    setSelectedModifications(updatedModifications)
  }

  const onAddToOrderPress = () => {
    dispatch(
      addOrderItem({
        id,
        title,
        stock,
        price,
        url,
        selectedModifications,
        orderItemId: uuidv4()
      })
    )

    Alert.alert(
      'Succesfully added to order',
      'Do you wish to view your order or continue shopping?',
      [
        {
          text: 'Continue',
          onPress: () => {
            navigation.navigate('ItemsList')
          }
        },
        {
          text: 'View order',
          onPress: () => {
            navigation.navigate('Order')
          }
        }
      ],
      {
        cancelable: true
      }
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Image style={styles.logo} src={url} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.itemInfo}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.stock}>Stock: {stock}</Text>
        </View>
      </View>
      <View style={styles.settings}>
        {modificationOptions[type].map((modification) => (
          <View key={modification.name}>
            <Text style={styles.options}>{modification.label}</Text>
            <SwitchSelector
              style={styles.switcherContainer}
              initial={0}
              buttonColor='black'
              selectedColor='white'
              textColor='black'
              textContainerStyle={styles.switcherTextContainerStyle}
              selectedTextContainerStyle={
                styles.switcherSelectedTextContainer
              }
              borderColor='whitesmoke'
              backgroundColor={'whitesmoke'}
              fontSize={15}
              height={50}
              hasPadding
              options={modification.values}
              onPress={(value) => {
                setModification(modification.name, value)
              }}
            />
          </View>
        ))}
        <View style={styles.note}>
          <Text style={styles.options}>Note</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder='Add note'
            value={text}
            placeholderTextColor='#888'
          />
          <View style={styles.orderBtn}>
            <Button
              title='Add to Order'
              onPress={onAddToOrderPress}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
