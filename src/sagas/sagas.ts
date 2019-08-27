// libs
import { call, takeLatest, all } from 'redux-saga/effects'
//import { error } from 'react-toastify-redux'

// others
import { Api } from './rest/index'

import { downloadConfig } from './rest/localApi'
//import { toastsMessages } from '../i18n'
import { CvActionsTypes } from '../constants/actions'
import { fetchUserDetailSaga, updateUserDetailSaga } from './cv'
import { JsonConfig } from '../types/global'

function* initializeApplication(config: JsonConfig) {
  yield all([
    takeLatest(CvActionsTypes.GET_USER_DETAIL, fetchUserDetailSaga),
    takeLatest(CvActionsTypes.SET_USER_DETAIL, updateUserDetailSaga),
  ])

  // intialize API with json config
  yield call(Api.createApi, config)
  // store json config in store
  //yield put(setEnvironment({ config }))
}

function* downloadConfigSaga() {
  let result = null
  try {
    const response = yield call(downloadConfig)
    result = response.data ? response.data : null
  } catch (error) {
    // ...
  }
  return result
}

export function* rootSaga() {
  // try to fetch `config.json` from server
  const localConfig: JsonConfig = yield call(downloadConfigSaga)

  // if config exists -> initialize main application
  if (localConfig) {
    yield call(initializeApplication, localConfig)
  } else {
    // config not found -> show error notification and exit
    //yield put(error(toastsMessages.noEnvConfig))
  }
}
