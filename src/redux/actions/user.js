import { userTypes } from '../types'

export const registerUser = (data, callback) => {
  return ({
    type: userTypes.REGISTER_USER,
    payload: { data, callback },
  }
  )
}
export const loginUser = (data, callback) => {
  return ({
    type: userTypes.LOGIN_USER,
    payload: { data, callback },
  }
  )
}
export const getProfileUser = (data, callback) => {
  return ({
    type: userTypes.PROFILE_USER,
    payload: { data, callback },
  }
  )
}
export const updateProfileUser = (data, callback) => {
  return ({
    type: userTypes.UPDATE_PROFILE_USER,
    payload: { data, callback },
  }
  )
}
