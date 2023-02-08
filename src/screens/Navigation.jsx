import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabs from './BottomTabs'
import ItemDetails from '../components/ItemDetails/ItemDetails'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home Screen'>
        <Stack.Screen
          name='Home Screen'
          component={BottomTabs}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='ItemDetails'
          component={ItemDetails}
          options={{
            headerShown: true,
            headerTitle: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
