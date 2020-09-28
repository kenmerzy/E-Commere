import React, { useState } from 'react'
import {
  View, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { iconLogo, iconEmail, iconPassword } from '../../../assets/images'
import { Colors, Fonts, TextStyles } from '../../../assets/styles'
import { Text } from '../../components'
import { userActions } from '../../redux/actions'
import { SCREEN_NAME } from '../../configs'

const { width } = Dimensions.get('window')
const screenScale = 375 / width

const LoginScreen = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'bot1@gmail.com' : '')
  const [passwordUser, setPasswordUser] = useState(__DEV__ ? '123456' : '')

  const handleLoginPress = async () => {
    try {
      dispatch(userActions.loginUser({
        email: emailUser,
        password: passwordUser,
      }))

      navigation.navigate(SCREEN_NAME.HomeScreen)
    } catch (error) {
      console.tron.log('===============================================')
      console.tron.log('failed to login')
      console.tron.log('===============================================')
    }
  }
  const ab123213213213c = () => {
    setEmailUser(emailUser + 1)
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.backgroundWhite,
      paddingHorizontal: 16,
    }}
    >
      <SafeAreaView />
      <ScrollView
        showsHorizontalScrollIndicator={false}
      >
        <View style={{
          alignItems: 'center',
          marginTop: 68,
        }}
        >
          <Image
            source={iconLogo}
            style={{
              width: 72,
              height: 72,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              ...TextStyles.heading4,
              marginBottom: 8,
              marginTop: 16,
              color: Colors.neutralDark,

            }}
          >
            Welcome to Lafyuu31231
          </Text>
          <Text
            style={{
              ...TextStyles.bodyNormalTextRegular,
              color: Colors.neutralGrey,
            }}
          >
            Sign in to continue
          </Text>
        </View>

        <View style={{
          borderWidth: 2 * StyleSheet.hairlineWidth,
          borderRadius: 5,
          borderColor: Colors.neutralGrey,
          marginTop: 28,
          paddingHorizontal: 16,

        }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}
          >
            <Image
              source={iconEmail}
              style={{
                width: 24,
                height: 24,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <TextInput
              style={{ flex: 1 }}

              placeholder="Your Email"
              value={emailUser}
              onChangeText={(text) => { setEmailUser(text) }}

            />
          </View>
        </View>
        <View style={{
          borderWidth: 2 * StyleSheet.hairlineWidth,
          borderRadius: 5,
          borderColor: Colors.neutralGrey,
          marginTop: 8,
          paddingHorizontal: 16,

        }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',

          }}
          >
            <Image
              source={iconPassword}
              style={{
                width: 24,
                height: 24,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Password"
              value={passwordUser}
              onChangeText={(text) => {
                setPasswordUser(text)
              }}

            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleLoginPress}
        >
          <View style={{
            width,
            height: 57,
            borderRadius: 5,
            backgroundColor: Colors.primaryBlue,
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Text style={{

              ...TextStyles.bodyMediumTextBold,
              color: Colors.backgroundWhite,
            }}
            >
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default LoginScreen
