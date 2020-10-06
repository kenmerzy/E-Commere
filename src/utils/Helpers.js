import { showMessage } from 'react-native-flash-message'

import { MessageStyles } from '../../assets/styles'

export const showMess = (message, type = 'error') => {
  if (type === 'error') {
    return showMessage({
      message,
      ...MessageStyles.error,

    })
  }
  if (type === 'success') {
    return showMessage({
      message,
      ...MessageStyles.success,

    })
  }
  return showMessage({
    message,
    ...MessageStyles.info,

  })
}
