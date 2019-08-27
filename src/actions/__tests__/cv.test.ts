// others
import { CvActionsTypes } from '../../constants/actions'
import { setCvData, setCvLoading, getUserDetail, setUserDetail } from '../cv'

describe('cv actions', () => {
  const setCvDataData = [{ id: 0, name: 'Test', surname: 'Test 2', job: 'Test job' }, { id: 0, name: 'Test', surname: 'Test 2', job: 'Test job' }]

  it('should create action to set cv is loading', () => {
    const expectedAction = {
      type: CvActionsTypes.SET_CV_LOADING,
      payload: true,
    }
    expect(setCvLoading(true)).toEqual(expectedAction)
  })

  it('should create action to set cv data', () => {
    const expectedAction = {
      type: CvActionsTypes.SET_CV_DATA,
      payload: setCvDataData,
    }
    expect(setCvData(setCvDataData)).toEqual(expectedAction)
  })

  it('should create action to get user detail', () => {
    const expectedAction = {
      type: CvActionsTypes.GET_USER_DETAIL,
      payload: 2,
    }
    expect(getUserDetail(2)).toEqual(expectedAction)
  })

  it('should create action to set user detail', () => {
    const expectedAction = {
      type: CvActionsTypes.SET_USER_DETAIL,
      payload: { id: 0, name: 'Test', surname: 'Test 2', job: 'Test job' },
    }
    expect(setUserDetail({ id: 0, name: 'Test', surname: 'Test 2', job: 'Test job' })).toEqual(expectedAction)
  })
})
