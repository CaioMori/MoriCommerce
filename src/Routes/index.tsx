import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator()

import HomeScreen from '../Screens/Home'
import LoginScreen from '../Screens/Login'
import ConfigurationScreen from '../Screens/Configuration'
import GlobalProvider from '../Providers/global'
import ThemeProvider from '../Providers/theme'

export default function Routes() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Configuration' component={ConfigurationScreen} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name='Cart' component={ConfigurationScreen} options={{ headerTitleAlign: 'center' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </GlobalProvider>
  )
}
