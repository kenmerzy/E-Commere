import React, { } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen, SplashScreen } from './src/screens'
import { SCREEN_NAME } from './src/configs'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREEN_NAME.SlashScreen} component={SplashScreen} />
        <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAME.RegisterScreen} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
