import React, { useState, useEffect } from 'react'
import {
  View, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import {
  iconLogo, iconEmail, iconPassword, iconFacebook, iconGoogle,
} from '../../../assets/images'
import { Colors, TextStyles, MessageStyles } from '../../../assets/styles'
import { Text } from '../../components'
import { userActions } from '../../redux/actions'
import { SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const screenScale = 375 / width

const LoginScreen = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'bot1@gmail.com' : '')
  const [passwordUser, setPasswordUser] = useState(__DEV__ ? '123456' : '')

  const handleRegisterPress = () => {
    // navigation.navigate(SCREEN_NAME.RegisterScreen)
    NavigationHelpers.navigateToScreen(SCREEN_NAME.RegisterScreen, null)
  }
  const handleLoginPress = async () => {
    dispatch(userActions.loginUser({
      email: emailUser,
      password: passwordUser,
    }, (response) => {
      if (response.success) {
        NavigationHelpers.navigateToScreen(SCREEN_NAME.HomeScreen, null)
      } else {
        Helpers.showMess(response.message, 'error')
      }
    }))
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
            Welcome to Lafyuu
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
                tintColor: Colors.primaryBlue,
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
            width: width - 32,
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
        <View
          style={{
            marginTop: 21,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{
            flex: 1,
            borderWidth: 2 * StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLight,
            marginRight: 25,
          }}
          />
          <Text style={{
            ...TextStyles.bodyMediumTextBold,
            color: Colors.neutralGrey,
          }}
          >
            OR
          </Text>
          <View
            style={{
              flex: 1,
              borderWidth: 2 * StyleSheet.hairlineWidth,
              borderColor: Colors.neutralLight,
              marginLeft: 25,

            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 16,
              borderWidth: 2 * StyleSheet.hairlineWidth,
              borderColor: Colors.neutralLight,
              borderRadius: 5,
            }}
          >
            <Image
              source={iconGoogle}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{
                ...TextStyles.bodyMediumTextBold,
                color: Colors.neutralGrey,
              }}
              >
                Login with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 16,
              borderWidth: 2 * StyleSheet.hairlineWidth,
              borderColor: Colors.neutralLight,
              borderRadius: 5,
              marginTop: 8,
            }}
          >
            <Image
              source={iconFacebook}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{
                ...TextStyles.bodyMediumTextBold,
                color: Colors.neutralGrey,
              }}
              >
                Login with Facebook
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
            marginBottom: 8,
          }}
          >
            <Text style={{
              ...TextStyles.linkSmall,
              color: Colors.primaryBlue,
            }}
            >
              Forgot Password?
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{
            ...TextStyles.bodyNormalTextRegular,
            color: Colors.neutralDark,
          }}
          >
            Don’t have an account?
            {' '}
          </Text>
          <TouchableOpacity
            onPress={handleRegisterPress}
          >
            <Text style={{
              ...TextStyles.linkSmall,
              color: Colors.primaryBlue,
            }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default LoginScreen
