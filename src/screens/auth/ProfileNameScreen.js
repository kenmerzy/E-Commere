import React, { useState, useEffect } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderTitle } from '../../components'
import { Colors, TextStyles } from '../../../assets/styles'
import { userActions } from '../../redux/actions'
import { NavigationHelpers, Helpers } from '../../utils'

const { width } = Dimensions.get('window')
const screenScale = width / 375
const ProfileName = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullname] = useState('')
  const tokenUser = (useSelector((state) => state.user.token))
  console.tron.log({ tokenUser })
  const dispatch = useDispatch()
  const handleSavePress = () => {
    dispatch(userActions.updateProfileUser({
      token: tokenUser,
      fullname: fullName,
    }, (response) => {
      if (response.success) {
        Helpers.showMess('Update Name successfully', 'success')
        NavigationHelpers.navigateBack()
      } else {
        Helpers.showMess(response.message, 'error')
      }
    }))
  }
  useEffect(() => {
    setFullname(` ${firstName} ${lastName}`)
  }, [firstName, lastName])

  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite }}>
      <ScrollView>
        <SafeAreaView />
        <HeaderTitle>
          Name
        </HeaderTitle>
        <View style={{
          paddingHorizontal: 16,
          paddingTop: 16,
        }}
        >
          <View style={{ marginBottom: 24 }}>
            <Text style={{
              ...TextStyles.bodyMediumTextBold,
              color: Colors.neutralDark,
              marginBottom: 12,
            }}
            >
              First Name
            </Text>
            <TextInput
              placeholder=""
              value={firstName}
              onChangeText={(text) => { setFirstName(text) }}
              style={{
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralGrey,
                borderColor: Colors.neutralLight,
                borderWidth: 2 * StyleSheet.hairlineWidth,
                borderRadius: 5,
                paddingLeft: 16,
              }}
            />
          </View>
          <View>
            <Text style={{
              ...TextStyles.bodyMediumTextBold,
              color: Colors.neutralDark,
              marginBottom: 12,
            }}
            >
              Last Name
            </Text>
            <TextInput
              placeholder=""
              value={lastName}
              onChangeText={(text) => { setLastName(text) }}
              style={{
                ...TextStyles.bodyNormalTextBold,
                color: Colors.neutralGrey,
                borderColor: Colors.neutralLight,
                borderWidth: 2 * StyleSheet.hairlineWidth,
                borderRadius: 5,
                paddingLeft: 16,
              }}
            />
          </View>
        </View>

      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primaryBlue,
          borderRadius: 5,
          width: 343,
          height: 57,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 16,
        }}
        onPress={handleSavePress}
      >
        <Text
          style={{
            color: Colors.backgroundWhite,
            ...TextStyles.bodyNormalTextBold,

          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default ProfileName
