/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import {
  avatar, iconBirthday, iconEmail, iconGender, iconPassword, iconPhone, iconRight,
} from '../../../assets/images'
import { HeaderTitle } from '../../components'
import { Colors, TextStyles } from '../../../assets/styles'
import { userActions } from '../../redux/actions'
import { Helpers } from '../../utils'

const { width } = Dimensions.get('window')
const screenScale = width / 375
const AccountScreen = (props) => {
  const [tokenUser, setTokenUser] = useState(props.route.params)

  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const { width } = Dimensions.get('window')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.getProfileUser({
      token: tokenUser,
    }, (response) => {
      if (response.success) {
        setFullName(response?.data?.fullname)
        setGender(response?.data?.gender)
        setPassword(response?.data?.password)
        setBirthDay(response?.data?.birthday)
        setEmail(response?.data?.email)
        setPhoneNumber(response?.data?.phone)
      }
    }))
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite }}>
      <SafeAreaView />
      <HeaderTitle>
        Profile
      </HeaderTitle>
      <View style={{
        width,
        height: 2 * StyleSheet.hairlineWidth,
        backgroundColor: Colors.neutralLight,
        marginTop: 28 * screenScale,
        marginBottom: 24,
      }}
      />
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16 * screenScale,
      }}
      >
        <Image
          source={avatar}
          style={{
            width: 72 * screenScale,
            height: 72 * screenScale,
            borderRadius: 36 * screenScale,
          }}
          resizeMode="cover"
        />
        <View style={{ marginLeft: 16 * screenScale }}>
          <Text style={{
            marginBottom: 4,
            ...TextStyles.bodyMediumTextBold,
            color: Colors.neutralDark,
          }}
          >
            {fullName}
          </Text>
          <Text style={{
            ...TextStyles.bodyNormalTextRegular,
            color: Colors.neutralGrey,
          }}
          >
            {email}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => { }}

        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              ...TextStyles.bodyNormalTextBold,
              ...Colors.neutralDark,
            }}
            >
              <Image
                source={iconGender}
                style={{
                  width: 24 * screenScale,
                  height: 24 * screenScale,
                }}
                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16,
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralDark,
              }}
              >
                Gender
              </Text>
            </View>
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

              }}
              >
                <Text style={{
                  ...TextStyles.bodyNormalTextRegular,
                  color: Colors.neutralGrey,
                  marginRight: 16 * screenScale,
                }}
                >
                  {gender}
                </Text>
                <Image
                  source={iconRight}
                  style={{
                    width: 24 * screenScale,
                    height: 24 * screenScale,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              ...TextStyles.bodyNormalTextBold,
              ...Colors.neutralDark,
            }}
            >
              <Image
                source={iconBirthday}
                style={{
                  width: 24 * screenScale,
                  height: 24 * screenScale,
                }}
                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16 * screenScale,
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralDark,
              }}
              >
                Birthday
              </Text>
            </View>
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

              }}
              >
                <Text style={{
                  ...TextStyles.bodyNormalTextRegular,
                  color: Colors.neutralGrey,
                  marginRight: 16 * screenScale,
                }}
                >
                  {birthDay}
                </Text>
                <Image
                  source={iconRight}
                  style={{
                    width: 24 * screenScale,
                    height: 24 * screenScale,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              ...TextStyles.bodyNormalTextBold,
              ...Colors.neutralDark,
            }}
            >
              <Image
                source={iconEmail}
                style={{
                  width: 24 * screenScale,
                  height: 24 * screenScale,
                  tintColor: Colors.primaryBlue,
                }}

                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16 * screenScale,
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralDark,
              }}
              >
                Email
              </Text>
            </View>
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

              }}
              >
                <Text style={{
                  ...TextStyles.bodyNormalTextRegular,
                  color: Colors.neutralGrey,
                  marginRight: 16 * screenScale,
                }}
                >
                  {email}
                </Text>
                <Image
                  source={iconRight}
                  style={{
                    width: 24 * screenScale,
                    height: 24 * screenScale,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              ...TextStyles.bodyNormalTextBold,
              ...Colors.neutralDark,
            }}
            >
              <Image
                source={iconPhone}
                style={{
                  width: 24 * screenScale,
                  height: 24 * screenScale,
                }}
                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16 * screenScale,
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralDark,
              }}
              >
                Phone Number
              </Text>
            </View>
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

              }}
              >
                <Text style={{
                  ...TextStyles.bodyNormalTextRegular,
                  color: Colors.neutralGrey,
                  marginRight: 16 * screenScale,
                }}
                >
                  {phoneNumber}
                </Text>
                <Image
                  source={iconRight}
                  style={{
                    width: 24 * screenScale,
                    height: 24 * screenScale,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              ...TextStyles.bodyNormalTextBold,
              ...Colors.neutralDark,
            }}
            >
              <Image
                source={iconPassword}
                style={{
                  width: 24 * screenScale,
                  height: 24 * screenScale,
                  tintColor: Colors.primaryBlue,
                }}
                resizeMode="contain"

              />
              <Text style={{
                marginLeft: 16 * screenScale,
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralDark,
              }}
              >
                Change Password
              </Text>
            </View>
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

              }}
              >
                <Text style={{
                  ...TextStyles.bodyNormalTextRegular,
                  color: Colors.neutralGrey,
                  marginRight: 16 * screenScale,
                }}
                >
                  {password}
                </Text>
                <Image
                  source={iconRight}
                  style={{
                    width: 24 * screenScale,
                    height: 24 * screenScale,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default AccountScreen
