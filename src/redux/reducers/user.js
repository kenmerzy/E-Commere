/* eslint-disable no-case-declarations */
import { userTypes } from '../types'

const initState = {
  token: '',
}

const userReducer = (state = initState, action) => {
  console.tron.log('===============================================')
  console.tron.log('token', action?.payload?.data?.token)
  console.tron.log('===============================================')
  switch (action) {
    case userTypes.REGISTER_USER_SUCCESS:

      return { ...state }
    case userTypes.REGISTER_USER_FAILED:
      return { ...state }
    case userTypes.LOGIN_USER_SUCCESS:
      const { token } = action?.payload?.data

      return { ...state, token }
    case userTypes.LOGIN_USER_FAILED:
      return { ...state }

    default:
      return { ...state }
  }
}
export default userReducer
