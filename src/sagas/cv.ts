// libs
import { call, put } from 'redux-saga/effects'
import { success, error } from 'react-toastify-redux'

// others
import Endpoints from '../constants/endpoints'
import { getSaga } from './rest'
import { setCvLoading, setCvData, GetUserDetailAction, SetUserDetailAction } from '../actions/cv'

export function* fetchUserDetailSaga(action: GetUserDetailAction) {
  const userId: number = action.payload

  try {
    yield put(setCvLoading(true))

    const response = yield call(getSaga, Endpoints.getUserDetail(userId))
    yield put(setCvData(response.data))
  } catch (err) {
    // yield put(error(toastsMessages.duplicateCloneDetailError))
    yield put(setCvLoading(false))
  }
}

export function* updateUserDetailSaga(action: SetUserDetailAction) {
  const user: User = action.payload

  try {
    yield put(success('app.user.update'))
    yield put(error('', { title: 'ERROR: ' + user.name + ' ' + user.surname }))
  } catch (err) {
    yield put(error('ERROR'))
  }
}
