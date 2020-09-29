import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

function* registerUserSaga(action) {
  try {
    const registerResopne = yield call(
      () => axios.post(`${API_URL}/user/register`, {
        email: action?.payload?.data?.email,
        password: action?.payload?.data?.password,
        fullname: action?.payload?.data?.fullname,
      })
    )
    console.tron.log('registerResopne', registerResopne)

    yield put({
      type: userTypes.REGISTER_USER_SUCCESS,
      payload: { data: registerResopne.data },
    })
  } catch (error) {
    yield put({ type: userTypes.REGISTER_USER_FAILED, payload: { error } })
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

export default function* userSaga() {
  yield takeLatest(userTypes.LOGIN_USER, loginUserSaga)
  yield takeLatest(userTypes.REGISTER_USER, registerUserSaga)
}
