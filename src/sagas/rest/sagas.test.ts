// libs
import { call } from 'redux-saga/effects'

// others
import { restSaga, Api } from './'
import { deleteSaga, getSaga, patchSaga, postSaga, putSaga } from './sagas'
import httpStatusCodes from '../../constants/httpStatusCodes'

describe('RestSaga', () => {
  let api: any
  let endpoint: string
  let params: Record<string, any>
  let response: Record<string, any>
  let token: Record<string, any>

  beforeAll(() => {
    api = Api.api.getEndpoint
    endpoint = '/test'
    token = { token: 'adfsda' }
    params = {
      pageSize: 10,
      pageNr: 1,
    }

    response = {
      data: {},
      status: httpStatusCodes.OK,
    }
  })

  it('should call endpoint successfully', () => {
    const gen = restSaga(api, endpoint, params)
    // expect(gen.next().value).toEqual(select(getAccessToken))
    expect(gen.next(token).value).toEqual(call(api, endpoint, token.token, params, undefined))
    expect(gen.next(response)).toEqual({ done: true, value: response })
  })
})

describe('GetSaga', () => {
  let api: Record<string, any>
  let endpoint: string
  let params: Record<string, any>

  beforeAll(() => {
    api = Api.api.getEndpoint
    endpoint = '/test'
    params = {
      pageSize: 10,
      pageNr: 1,
    }
  })

  it('should call endpoint successfully', () => {
    const gen = getSaga(endpoint, params)
    expect(gen.next().value).toEqual(call(restSaga, api, endpoint, params))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})

describe('PostSaga', () => {
  let api: Record<string, any>
  let endpoint: string
  let params: Record<string, any>

  beforeAll(() => {
    api = Api.api.postEndpoint
    endpoint = '/test'
    params = {
      pageSize: 10,
      pageNr: 1,
    }
  })

  it('should call endpoint successfully', () => {
    const gen = postSaga(endpoint, params)
    expect(gen.next().value).toEqual(call(restSaga, api, endpoint, params))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})

describe('PutSaga', () => {
  let api: Record<string, any>
  let endpoint: string
  let params: Record<string, any>

  beforeAll(() => {
    api = Api.api.putEndpoint
    endpoint = '/test'
    params = {
      pageSize: 10,
      pageNr: 1,
    }
  })

  it('should call endpoint successfully', () => {
    const gen = putSaga(endpoint, params)
    expect(gen.next().value).toEqual(call(restSaga, api, endpoint, params))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})

describe('PatchSaga', () => {
  let api: Record<string, any>
  let endpoint: string
  let params: Record<string, any>

  beforeAll(() => {
    api = Api.api.patchEndpoint
    endpoint = '/test'
    params = {
      pageSize: 10,
      pageNr: 1,
    }
  })

  it('should call endpoint successfully', () => {
    const gen = patchSaga(endpoint, params)
    expect(gen.next().value).toEqual(call(restSaga, api, endpoint, params))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})

describe('DeleteSaga', () => {
  let api: Record<string, any>
  let endpoint: string

  beforeAll(() => {
    api = Api.api.deleteEndpoint
    endpoint = '/test'
  })

  it('should call endpoint successfully', () => {
    const gen = deleteSaga(endpoint)
    expect(gen.next().value).toEqual(call(restSaga, api, endpoint, undefined, undefined))
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})
