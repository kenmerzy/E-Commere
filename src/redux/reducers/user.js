import { userTypes } from '../types'

const initState = {
  token: '',

}

const userReducer = (state = initState, action) => {
  switch (action) {
    case userTypes.REGISTER_USER:
      return { ...state }

    default:
      return state
  }
}
export default userReducer