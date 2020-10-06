import * as React from 'react'

export const navigationRef = React.createRef()

export function navigateToScreen(name, params) {
  navigationRef.current?.navigate(name, params)
}
export function navigateToScreenInTab(tabName, screenName, params) {
  navigationRef.current?.navigate(tabName, { screen: screenName, params })
}
export function navigateBack() {
  navigationRef.current?.goBack()
}
