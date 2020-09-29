/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import {
  View, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text } from '../../components'
import {
  iconLogo, iconEmail, iconPassword, iconFullname,
} from '../../../assets/images'
import { userActions } from '../../redux/actions'

const { width } = Dimensions.get('window')
const screenScale = 375 / width
const RegisterScreen = (props) => {
  const [fullName, setfullName] = useState(__DEV__ ? 'Nguyen Ngoc Long' : '')
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'bot1@gmail.com' : '')
  const [password, setPassword] = useState(__DEV__ ? '123456' : '')
  const [passwordAgain, setPasswordAgain] = useState(__DEV__ ? '123456' : '')
  const [isTextInputFocus, setIsTextInputFocus] = useState(false)
  const { navigation } = props
  const user = useSelector((state) => state)
  const dispatch = useDispatch()
  const handleRegisterPress = () => {
    if (password === passwordAgain) {
      dispatch(userActions.registerUser(
        {
          fullname: fullName,
          email: emailUser,
          password,
        }
      ))
    } else {
      setPasswordAgain('Password confirm incorrect')
    }
  }
  const handleLoginPress = () => {
    navigation.goBack()
  }
  useEffect(() => {
    switch (isTextInputFocus) {
      case 'fullName':
        break

      default:
        break
    }
  }, [isTextInputFocus])
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
            Let's Get Started
          </Text>
          <Text
            style={{
              ...TextStyles.bodyMediumTextBold,
              color: Colors.neutralGrey,
            }}
          >
            Create an new account
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
              source={iconFullname}
              style={{
                width: 24,
                height: 24,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <TextInput
              style={{
                flex: 1,
                ...TextStyles.bodyMediumTextBold,
                color: Colors.neutralDark,
              }}
              placeholder="Full Name"
              value={fullName}
              onChangeText={(text) => { setfullName(text) }}

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
              source={iconEmail}
              style={{
                width: 24,
                height: 24,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <TextInput
              style={{
                flex: 1,
                ...TextStyles.bodyMediumTextBold,
                color: Colors.neutralDark,
              }}

              placeholder="Your Email"
              value={emailUser}
              onChangeText={(text) => { setEmailUser(text) }}
              onFocus={() => { }}
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
              style={{
                flex: 1,
                ...TextStyles.bodyMediumTextBold,
                color: Colors.neutralDark,
              }}

              placeholder="Password"
              value={password}
              onChangeText={(text) => { setPassword(text) }}

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
              style={{
                flex: 1,
                ...TextStyles.bodyMediumTextBold,
                color: Colors.neutralDark,
              }}

              placeholder="Password Again"
              value={passwordAgain}
              onChangeText={(text) => { setPasswordAgain(text) }}

            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleRegisterPress}
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
              Create an account
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}
        >
          <Text style={{
            ...TextStyles.bodyNormalTextRegular,
            color: Colors.neutralDark,
          }}
          >
            Have an account?
            {' '}
          </Text>
          <TouchableOpacity
            onPress={handleLoginPress}

          >
            <Text style={{
              ...TextStyles.linkSmall,
              color: Colors.primaryBlue,
            }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default RegisterScreen
