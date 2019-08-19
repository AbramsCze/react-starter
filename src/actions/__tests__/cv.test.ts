// others
import { CvActionsTypes } from '../../constants/actions'
import { setCvData, setCvLoading } from '../cv'

describe('cv actions', () => {
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
      payload: ['test1', 'test2'],
    }
    expect(setCvData(['test1', 'test2'])).toEqual(expectedAction)
  })
})
