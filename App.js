/* eslint-disable react/jsx-props-no-spreading */
import React, { } from 'react'
import {
  View, TouchableOpacity, Image, SafeAreaView, StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  LoginScreen, RegisterScreen, SplashScreen, HomeScreen, AccountScreen, CartScreen, OfferScreen, ExploreScreen,
} from './src/screens'
import store from './src/redux/store'
import { SCREEN_NAME, TAB_DATA } from './src/configs'
import { navigationRef } from './src/utils/NavigationHelpers'
import { Text } from './src/components'
import { TextStyles, Colors } from './assets/styles'
import {
  iconAccount, iconCart, iconExplore, iconHome, iconOffer,
} from './assets/images'

const Tab = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        borderTopColor: Colors.neutralLight,
        borderTopWidth: 3 * StyleSheet.hairlineWidth,
        backgroundColor: Colors.backgroundWhite,
      }}
      >
        {
          state.routes.map((route, index) => {
            const { options } = descriptors[route.key]
            const label = options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              })
            }

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1, height: 60, alignItems: 'center', justifyContent: 'flex-end',
                }}
              >
                <Image
                  source={TAB_DATA[index].image}
                  style={[{
                    width: 24,
                    height: 24,
                    marginBottom: 4,
                  },
                  isFocused ? { tintColor: Colors.primaryBlue }
                    : { tintColor: Colors.neutralGrey },
                  ]}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    isFocused
                      ? { ...TextStyles.captionNormalTextBold, color: Colors.primaryBlue }
                      : { ...TextStyles.captionNormalTextRegular, color: Colors.neutralGrey },
                    { marginBottom: 5 },
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </SafeAreaView>

  )
}

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
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
