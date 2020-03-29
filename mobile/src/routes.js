import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Party from './pages/Party'
import Detail from './pages/Detail'

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Party" component={Party} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </>
  )
}
