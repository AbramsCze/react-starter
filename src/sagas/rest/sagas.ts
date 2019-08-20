// libs
import { call } from 'redux-saga/effects'
//import { error } from 'react-toastify-redux'

// others
import { Api } from './index'
import HttpStatusCode from '../../constants/httpStatusCodes'
//import { toastsMessages } from '../../i18n'

function displayErrorNotification(err: Record<string, any>) {
  if (err.response && err.response.status === HttpStatusCode.UNAUTHORIZED) {
    //yield put(error(toastsMessages.unauthorized))
  } else if (err.response && err.response.status === HttpStatusCode.SERVICE_UNAVAILABLE) {
    //yield put(error(toastsMessages.serviceUnavailable))
  } else {
    //yield put(error(err.response.message))
  }
}

export function* restSaga(
  api: any,
  endpoint: string,
  params?: Record<string, any>,
  payload?: Record<string, any>
): Generator {
  let response
  try {
    const token = 'adfsda' //yield select(getAccessToken)
    response = yield call(api, endpoint, token, params, payload)
  } catch (error) {
    yield displayErrorNotification(error)
    throw error
  }
  return response
}

export function* unauthorizedRestSaga(
  api: any,
  endpoint: string,
  params?: Record<string, any>,
  payload?: Record<string, any>
): Generator {
  try {
    return yield call(api, endpoint, params, payload)
  } catch (error) {
    yield displayErrorNotification(error)
    throw error
  }
}

export function* unauthorizedPostSaga(endpoint: string, payload?: Record<string, any>) {
  return yield call(
    unauthorizedRestSaga,
    Api.api.unauthorizedPostEndpoint,
    endpoint,
    payload
  )
}

export function* getSaga(endpoint: string, params?: Record<string, any>) {
  return yield call(restSaga, Api.api.getEndpoint, endpoint, params)
}

export function* postSaga(endpoint: string, payload?: Record<string, any>) {
  return yield call(restSaga, Api.api.postEndpoint, endpoint, payload)
}

export function* putSaga(endpoint: string, payload?: Record<string, any>) {
  return yield call(restSaga, Api.api.putEndpoint, endpoint, payload)
}

export function* patchSaga(endpoint: string, payload?: Record<string, any>) {
  return yield call(restSaga, Api.api.patchEndpoint, endpoint, payload)
}

export function* deleteSaga(endpoint: string, params?: Record<string, any>, payload?: Record<string, any>) {
  return yield call(restSaga, Api.api.deleteEndpoint, endpoint, params, payload)
}
