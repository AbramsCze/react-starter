// libs
import { put, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

// others
import { fetchUserDetailSaga } from '../cv'
import { CvActionsTypes } from '../../constants/actions'
import { GetUserDetailAction, setCvLoading } from '../../actions/cv'
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