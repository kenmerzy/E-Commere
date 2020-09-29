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
    console.tron.log('===============================================')
    console.tron.log('registerResopne', registerResopne)
    console.tron.log('===============================================')
    yield put({
      type: userTypes.REGISTER_USER_SUCCESS,
      payload: { data: registerResopne.data },
    })
  } catch (error) {
    yield put({ type: userTypes.REGISTER_USER_FAILED, payload: { error } })
  }
}
function* loginUserSaga(action) {
  try {
    const loginResopne = yield call(
      () => axios.post(`${API_URL}/user/login`, {
        email: action?.payload?.data?.email,
        password: action?.payload?.data?.password,
      })
    )
    console.tron.log('===============================================')
    console.tron.log('loginResopne', loginResopne)
    console.tron.log('===============================================')
    yield put({
      type: userTypes.LOGIN_USER_SUCCESS,
      payload: { data: loginResopne.data },
    })
  } catch (error) {
    yield put({ type: userTypes.LOGIN_USER_FAILED, payload: { error } })
  }
}

export default function* userSaga() {
  yield takeLatest(userTypes.LOGIN_USER, loginUserSaga)
  yield takeLatest(userTypes.REGISTER_USER, registerUserSaga)
}
