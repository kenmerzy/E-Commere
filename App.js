import React, { } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import {
  LoginScreen, RegisterScreen, SplashScreen, HomeScreen,
} from './src/screens'
import store from './src/redux/store'
import { Colors, TextStyles } from './assets/styles'
import { SCREEN_NAME } from './src/configs'
import { navigationRef } from './src/utils/NavigationHelpers'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={SCREEN_NAME.SlashScreen} component={SplashScreen} />
          <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={SCREEN_NAME.RegisterScreen} component={RegisterScreen} />
          <Stack.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage
        position="top"
      />
    </Provider>
  )
}

export default App
