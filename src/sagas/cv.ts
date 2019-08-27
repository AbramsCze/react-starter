// libs
import { call, put } from 'redux-saga/effects'
import { success, error } from 'react-toastify-redux'

// others
import Endpoints from '../constants/endpoints'
//import { toastsMessages } from '../../i18n'
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
    yield put(success(user.name + ' ' + user.surname + ' ' + user.job))
  } catch (err) {
    yield put(error('ERROR'))
  }
}
