// others
import { CvInitialState } from './cv'

describe('cv model', () => {
  let mockedState

  beforeAll(() => {
    mockedState = {
      loading: false,
      cvs: [],
    }
  })

  it('should return correct initial state', () => {
    expect(CvInitialState).toEqual(mockedState)
  })
})
