import React from 'react'
import {
  View, Text, TouchableOpacity, Dimensions, Image, StyleSheet,
} from 'react-native'
import { NavigationHelpers } from '../utils'
import { Colors, TextStyles } from '../../assets/styles'
import { iconBack } from '../../assets/images'

const { width } = Dimensions.get('window')
const screenScale = width / 375

const handleGoBackPress = () => {
  NavigationHelpers.navigateBack()
}
const HeaderTitle = (props) => {
  const { style = {}, children } = props
  const flattenStyle = StyleSheet.flatten(style)
  return (
    <View style={{
      marginLeft: 16 * screenScale,
      marginRight: 12 * screenScale,
      marginTop: 15 * screenScale,
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
            width: 24 * screenScale,
            height: 24 * screenScale,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 12 * screenScale }}>
        <Text
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          style={{
            ...TextStyles.bodyLargeTextBold,
            color: Colors.neutralDark,
            ...flattenStyle,

          }}
        >
          {children}
        </Text>
      </View>
    </View>
  )
}
export default HeaderTitle
