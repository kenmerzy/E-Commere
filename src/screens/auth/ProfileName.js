import React from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderTitle } from '../../components'
import { Colors } from '../../../assets/styles'

const { width } = Dimensions.get('window')
const screenScale = width / 375
const ProfileName = () => {
  return (
    <View>
      <ScrollView>
        <SafeAreaView />
        <HeaderTitle>
          Name
        </HeaderTitle>
        <View style={{
          width,
          height: 2 * StyleSheet.hairlineWidth,
          backgroundColor: Colors.neutralLight,
          marginTop: 28,
          marginBottom: 24,
        }}
        />
      </ScrollView>
    </View>
  )
}
export default ProfileName
