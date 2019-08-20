//others
import cv from '../cv'
import { CvInitialState } from '../../models/cv'
import { setCvLoading, setCvData } from '../../actions/cv'

describe('cv reducer', () => {
  let cvLoading: boolean
  let userData: Array<User>

  beforeAll(() => {
    cvLoading = true
    userData = [{ 'id': 2, 'name': 'Tomáš', 'surname': 'Dvořák', 'job': 'Web devoloper' }]
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
      setCvData(userData)
    )
    expect(state.users).toEqual(userData)
  })
})
