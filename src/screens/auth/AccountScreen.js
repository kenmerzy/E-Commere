/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import {
  iconBack, avatar, iconBirthday, iconEmail, iconGender, iconPassword,
} from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { userActions } from '../../redux/actions'
import { Helpers, NavigationHelpers } from '../../utils'

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
  const handleGoBackPress = () => {
    const screenScale = width / 375
    NavigationHelpers.navigateBack()
  }
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
      } else {
        Helpers.showMess('Can not get profile info !!!', 'error')
      }
    }))
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite }}>
      <SafeAreaView />
      <View style={{
        marginLeft: 16,
        marginRight: 12,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',

      }}
      >
        <TouchableOpacity
          onPress={handleGoBackPress}
        >
          <Image
            source={iconBack}
            style={{
              width: 24,
              height: 24,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{
            ...TextStyles.bodyLargeTextBold,
            color: Colors.neutralDark,
          }}
          >
            Profile
          </Text>
        </View>
      </View>
      <View style={{
        width,
        height: 2 * StyleSheet.hairlineWidth,
        backgroundColor: Colors.neutralLight,
        marginTop: 28,
        marginBottom: 24,
      }}
      />
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
      }}
      >
        <Image
          source={avatar}
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
          }}
          resizeMode="cover"
        />
        <View style={{ marginLeft: 16 }}>
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
            padding: 15,
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
                  width: 24,
                  height: 24,
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
                  marginRight: 16,
                }}
                >
                  {gender}
                </Text>
                <Image
                  source={iconBack}
                  style={{
                    width: 24,
                    height: 24,
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
            padding: 15,
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
                  width: 24,
                  height: 24,
                }}
                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16,
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
                  marginRight: 16,
                }}
                >
                  {birthDay}
                </Text>
                <Image
                  source={iconBack}
                  style={{
                    width: 24,
                    height: 24,
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
            padding: 15,
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
                  width: 24,
                  height: 24,
                  tintColor: Colors.primaryBlue,
                }}

                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16,
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
                  marginRight: 16,
                }}
                >
                  {email}
                </Text>
                <Image
                  source={iconBack}
                  style={{
                    width: 24,
                    height: 24,
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
            padding: 15,
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
                  width: 24,
                  height: 24,
                }}
                resizeMode="contain"
              />
              <Text style={{
                marginLeft: 16,
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
                  marginRight: 16,
                }}
                >
                  {phoneNumber}
                </Text>
                <Image
                  source={iconBack}
                  style={{
                    width: 24,
                    height: 24,
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
            padding: 15,
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
                  width: 24,
                  height: 24,
                  tintColor: Colors.primaryBlue,
                }}
                resizeMode="contain"

              />
              <Text style={{
                marginLeft: 16,
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
                  marginRight: 16,
                }}
                >
                  {password}
                </Text>
                <Image
                  source={iconBack}
                  style={{
                    width: 24,
                    height: 24,
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
