//others
import cv from './cv'
import { CvInitialState } from '../models/cv'
import { setCvLoading, setCvData } from '../actions/cv'

describe('cv reducer', () => {
  let cvLoading: boolean
  let cvData: Array<string>

  beforeAll(() => {
    cvLoading = true
    cvData = ['test1', 'test2']
  })

  it('should handle setCvLoading', () => {
    const state = cv(
      CvInitialState,
      setCvLoading(cvLoading)
    )
    expect(state.loading).toEqual(cvLoading)
  })

  it('should handle setCvData', () => {
    const state = cv(
      CvInitialState,
      setCvData(cvData)
    )
    expect(state.cvs).toEqual(cvData)
  })
})
