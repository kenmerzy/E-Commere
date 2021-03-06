import { React } from 'react'
import {
  SafeAreaView, View, TouchableOpacity, StyleSheet, Image,
} from 'react-native'
import { Colors, TextStyles } from '../../assets/styles'
import Text from './Text'
import { TAB_DATA } from '../configs'

function MainTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        borderTopColor: Colors.neutralLight,
        borderTopWidth: 3 * StyleSheet.hairlineWidth,
        backgroundColor: Colors.backgroundWhite,
      }}
      >
        {
          state.routes.map((route, index) => {
            const { options } = descriptors[route.key]
            const label = options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              })
            }

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                key={`tabbar-${route.key}`}
                style={{
                  flex: 1, height: 60, alignItems: 'center', justifyContent: 'flex-end',
                }}
              >
                <Image
                  source={TAB_DATA[index].image}
                  style={[{
                    width: 24,
                    height: 24,
                    marginBottom: 4,
                  },
                  isFocused ? { tintColor: Colors.primaryBlue }
                    : { tintColor: Colors.neutralGrey },
                  ]}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    isFocused
                      ? { ...TextStyles.captionNormalTextBold, color: Colors.primaryBlue }
                      : { ...TextStyles.captionNormalTextRegular, color: Colors.neutralGrey },
                    { marginBottom: 5 },
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}
export default MainTabBar
