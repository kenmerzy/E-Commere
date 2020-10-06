/* eslint-disable react/jsx-props-no-spreading */
import React, { } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  LoginScreen, RegisterScreen, SplashScreen, HomeScreen, AccountScreen,
  CartScreen, OfferScreen, ExploreScreen, ProfileNameScreen,
} from './src/screens'
import store from './src/redux/store'
import { SCREEN_NAME } from './src/configs'
import { navigationRef } from './src/utils/NavigationHelpers'
import { MainTabBar } from './src/components'

const Tab = createBottomTabNavigator()

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MainTabBar {...props} />}
      screenOptions={{

      }}
    >
      <Tab.Screen
        name={SCREEN_NAME.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.ExploreScreen}
        component={ExploreScreen}
        options={{ title: 'Explore' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.CartScreen}
        component={CartScreen}
        options={{ title: 'Cart' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.OfferScreen}
        component={OfferScreen}
        options={{ title: 'Offer' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.AccountScreen}
        component={AccountScreen}
        options={{ title: 'Account' }}
      />

    </Tab.Navigator>
  )
}
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
          <Stack.Screen name={SCREEN_NAME.ProfileNameScreen} component={ProfileNameScreen} />
          <Stack.Screen name={SCREEN_NAME.AccountScreen} component={AccountScreen} />
          <Stack.Screen name={SCREEN_NAME.MAIN_TAB} component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage
        position="top"
      />
    </Provider>
  )
}

export default App
