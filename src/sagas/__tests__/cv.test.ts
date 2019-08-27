// libs
import { put, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { success } from 'react-toastify-redux'

// others
import { fetchUserDetailSaga, updateUserDetailSaga } from '../cv'
import { CvActionsTypes } from '../../constants/actions'
import { GetUserDetailAction, SetUserDetailAction, setCvLoading } from '../../actions/cv'
import { getSaga } from '../rest'
import { Endpoints } from '../../constants/endpoints'

describe('fetchUserDetailSaga', () => {
  let sagaIt: SagaIterator
  const action: GetUserDetailAction = {
    payload: 1,
    type: CvActionsTypes.GET_USER_DETAIL
  }
  beforeAll(() => {
    sagaIt = fetchUserDetailSaga(action)
  })

  it('error passing through', () => {
    const userId = action.payload
    const expectedEffect1 = put(setCvLoading(true))
    expect(sagaIt.next().value).toEqual(expectedEffect1)
    const expectedEffect2 = call(getSaga, Endpoints.getUserDetail(userId))
    expect(sagaIt.next().value).toEqual(expectedEffect2)
    const expectedEffect3 = put(setCvLoading(false))
    expect(sagaIt.next().value).toEqual(expectedEffect3)
  })
})

describe('updateUserDetailSaga', () => {
  let sagaIt: SagaIterator
  const action: SetUserDetailAction = {
    payload: {
      id: 0,
      name: 'Saga',
      surname: 'Test',
      job: 'Tester'
    },
    type: CvActionsTypes.SET_USER_DETAIL
  }
  beforeAll(() => {
    sagaIt = updateUserDetailSaga(action)
  })

  it('success passing through', () => {
    const action = success('Saga Test Tester')
    action.payload.id = 'toast2'
    const expectedEffect = put(action)
    expect(sagaIt.next().value).toEqual(expectedEffect)
  })
})