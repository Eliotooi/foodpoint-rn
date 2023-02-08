import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IconHome from 'react-native-vector-icons/Ionicons'
import IconHistory from 'react-native-vector-icons/MaterialIcons'
import IconOrder from 'react-native-vector-icons/Ionicons'

import History from '../components/History/History'
import Order from '../components/Order/Order'
import ItemsList from './ItemsList'

const Tab = createBottomTabNavigator()

const homeIcon = ({ color, size }) => (
  <IconHome name={'home-outline'} size={size} color={color} />
)
const historyIcon = ({ color, size }) => (
  <IconHistory name={'history'} size={size} color={color} />
)
const orderIcon = ({ color, size }) => (
  <IconOrder name={'pricetag-outline'} size={size} color={color} />
)

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='ItemsList'
        component={ItemsList}
        options={{
          headerShown: false,
          tabBarIcon: homeIcon
        }}
      />
      <Tab.Screen
        name='History'
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: historyIcon
        }}
      />
      <Tab.Screen
        name='Order'
        component={Order}
        options={{
          headerShown: false,
          tabBarIcon: orderIcon
        }}
      />
    </Tab.Navigator>
  )
}
