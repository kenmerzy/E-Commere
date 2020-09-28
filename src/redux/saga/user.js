import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

function* registerUserSaga(action) {
  try {
    const registerResopne = yield call(
      () => axios.get(`${API_URL}/user/register`, {
        email: action?.payload?.data?.email,
        password: action?.payload?.data?.password,
        fullname: action?.payload?.data?.fullname,
      })
    )
    yield put({
      type: userTypes.REGISTER_USER_SUCCESS,
      payload: { data: registerResopne.data },
    })
  } catch (error) {
    yield put({ type: userTypes.REGISTER_USER_FAILED, payload: { error } })
  }
}

export default function* userSaga() {
  yield takeLatest(userTypes.REGISTER_USER, registerUserSaga)
}
