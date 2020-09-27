import { userTypes } from '../types'

export const registerUser = (data) => {
  return ({
    type: userTypes.REGISTER_USER_SUCCESS,
    payload: { data },
  }
  )
}
