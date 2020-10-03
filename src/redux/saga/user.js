import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

function* registerUserSaga(action) {
  const { callback, data } = action.payload
  const { email, password, fullname } = data
  try {
    const registerResopne = yield call(
      () => axios.post(`${API_URL}/user/register`, {
        email,
        password,
        fullname,
      })
    )
    if (registerResopne.data.success) {
      yield put({
        type: userTypes.REGISTER_USER_SUCCESS,
        payload: { data: registerResopne.data },
      })
      callback(registerResopne?.data)
    }
  } catch (error) {
    callback(error.response.data)
  }
}
function* loginUserSaga(action) {
  const { callback, data } = action.payload
  const { email, password } = data
  try {
    const loginResopne = yield call(
      () => axios.post(`${API_URL}/user/login`, {
        email,
        password,

      })
    )

    if (loginResopne.data.success) {
      yield put({
        type: userTypes.LOGIN_USER_SUCCESS,
        payload: { data: loginResopne.data.data },
      })
      callback(loginResopne?.data)
    }
  } catch (error) {
    callback(error.response.data)
  }
}
function* getProfileUserSaga(action) {
  const { callback, data } = action.payload
  const { token } = data
  try {
    const getUserProfileResopne = yield call(
      () => axios.post(`${API_URL}/user/profile`, {
        token,
      })
    )
    if (getUserProfileResopne.data.success) {
      yield put({
        type: userTypes.PROFILE_USER_SUCCESS,
        payload: { data: getUserProfileResopne.data.data },
      })
      callback(getUserProfileResopne?.data)
    }
  } catch (error) {
    console.log({ loi: error.response.data })
    callback(error.response.data)
  }
}

export default function* userSaga() {
  yield takeLatest(userTypes.LOGIN_USER, loginUserSaga)
  yield takeLatest(userTypes.REGISTER_USER, registerUserSaga)
  yield takeLatest(userTypes.PROFILE_USER, getProfileUserSaga)
}
