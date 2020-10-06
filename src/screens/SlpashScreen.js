import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { useSelector } from 'react-redux'
import { SCREEN_NAME } from '../configs'
import { NavigationHelpers } from '../utils'

const SplashScreen = (props) => {
  const { navigation } = props
  const user = useSelector((state) => state.user)
  const persist = useSelector((state) => state._persist)

  useEffect(() => {
    if (persist.rehydrated) {
      if (!user?.token) {
        //  NavigationHelpers.navigateToScreen(SCREEN_NAME.LoginScreen, null)
        navigation.navigate(SCREEN_NAME.LoginScreen)
        SplashScreenLib.hide()

        return
      }
      // NavigationHelpers.navigateToScreen(SCREEN_NAME.HomeScreen, null)
      navigation.navigate(SCREEN_NAME.MAIN_TAB, { screen: SCREEN_NAME.HomeScreen })
      SplashScreenLib.hide()
    }
  }, [persist.rehydrated])
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  )
}
export default SplashScreen
