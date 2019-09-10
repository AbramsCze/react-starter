// libs
import { call, put } from 'redux-saga/effects'

// others
import Endpoints from '../constants/endpoints'
import { getSaga } from './rest'
import { setCvLoading, setCvData, GetUserDetailAction, SetUserDetailAction } from '../actions/cv'
import { enqueueSnackbar, closeSnackbar, removeSnackbar } from '../actions/notification'

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
    yield put(setCvLoading(true))
    yield put(enqueueSnackbar({ message: 'míša' }))
    yield put(closeSnackbar(0))
    yield put(closeSnackbar(1))
    yield put(removeSnackbar(1))
    console.log(user)
  } catch (err) {
    yield put(setCvLoading(false))
  }
}
