import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './style'
import {
  pushToHistory,
  removeOrderItem,
  removeAllItems
} from '../../redux/actions'
import {
  orderItemsSelector,
  totalSelector
} from '../../redux/selectors'

export default function Order({ navigation }) {
  const orderItems = useSelector(orderItemsSelector)
  const total = useSelector(totalSelector)
  const dispatch = useDispatch()

  const getDate = () => {
    const day = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()

    return `${day}/${month}/${year}`
  }

  const removePosition = (orderItemId) => {
    dispatch(removeOrderItem(orderItemId))
  }

  const checkout = () => {
    dispatch(
      pushToHistory({
        total: total + 17,
        date: getDate().toString()
      })
    )

    dispatch(removeAllItems())
    navigation.navigate('ItemsList')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Order</Text>
      <Text style={styles.text}>Item</Text>
      {orderItems.map((item) => (
        <View key={item.orderItemId} style={styles.itemsContainer}>
          <View style={styles.items}>
            <Image style={styles.img} src={item.url} />
            <View style={styles.info}>
              <View style={styles.delite}>
                <Text style={styles.itemsName}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => removePosition(item.orderItemId)}
                >
                  <Icon
                    style={styles.deliteIcon}
                    name={'closecircle'}
                    size={25}
                    color={'red'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {item.selectedModifications.map(
                  ({ label, value }) => (
                    <View>
                      <Text style={styles.modificationsText}>
                        {label}: {value}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
      <Text style={styles.text}>Order Summary</Text>
      <View style={styles.containerSummary}>
        <View style={styles.check}>
          <View style={styles.leftCheck}>
            <Text style={styles.leftCheckText}>Subtotal</Text>
            <Text style={styles.leftCheckText}>Tax</Text>
          </View>
          <View style={styles.rightCheck}>
            <Text style={styles.rightCheckText}>${total}</Text>
            <Text style={styles.rightCheckText}>$17</Text>
          </View>
        </View>
        <View style={styles.total}>
          <View style={styles.leftTotal}>
            <Text style={styles.leftTotalText}>Total</Text>
          </View>
          <View style={styles.rightTotal}>
            <Text style={styles.rightTotalText}>${17 + total}</Text>
          </View>
        </View>
      </View>
      <View style={styles.payContainer}>
        <TouchableOpacity onPress={checkout}>
          <Text style={styles.payText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
