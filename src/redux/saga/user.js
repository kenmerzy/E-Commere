import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { userTypes } from '../types'
import { userActions } from '../actions'

function* registerUserSaga(action) {
  try {
    const user = yield call(
      () => axios.get('https://huymanh.dev/ecommerce/api')
    )
    yield put({ type: userTypes.GET_WEATHER_SUCCESS, payload: { data: user.data } })
  } catch (error) {
    yield put({ type: userTypes.REGISTER_USER_FAILED, payload: { error } })
  }
}
function* userSaga() {
  yield takeLatest(userTypes.GET_WEATHER, registerUserSaga)
}

export default userSaga
