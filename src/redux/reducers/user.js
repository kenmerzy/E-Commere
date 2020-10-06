/* eslint-disable no-case-declarations */
import { userTypes } from '../types'

const initState = {
  token: '',
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.REGISTER_USER_SUCCESS:
      return { ...state }

    case userTypes.LOGIN_USER_SUCCESS:
      const { token } = action?.payload?.data

      return { ...state, token }

    case userTypes.PROFILE_USER_SUCCESS:
      const { data } = action?.payload
      return { ...state, ...data }

    case userTypes.UPDATE_PROFILE_USER_SUCCESS:
      return { ...state, ...action?.payload?.data }
    default:
      return state
  }
}
export default userReducer
