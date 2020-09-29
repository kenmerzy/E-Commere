import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { SCREEN_NAME } from '../configs'

const SplashScreen = (props) => {
  const { navigation } = props
  useEffect(() => {
    SplashScreenLib.hide()
    navigation.navigate(SCREEN_NAME.LoginScreen)
  }, [])
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  )
}
export default SplashScreen
