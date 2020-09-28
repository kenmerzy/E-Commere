import { userTypes } from '../types'

const initState = {
  token: '',

}

const userReducer = (state = initState, action) => {
  switch (action) {
    case userTypes.REGISTER_USER_SUCCESS:
      return { ...state }
    case userTypes.REGISTER_USER_FAILED:
      return { ...state }
    case userTypes.LOGIN_USER_SUCCESS:
      return { ...state }
    case userTypes.LOGIN_USER_FAILED:
      return { ...state }

    default:
      return state
  }
}
export default userReducer
