// others
import { copyActionKeysToValues } from './utils'

describe('utils test', () => {
  const mockedActions = {
    SET_TEST_LOADING: '',
    SET_TEST_DATA: '',
  }

  it('should copy key names as their values', () => {
    copyActionKeysToValues(mockedActions)
    expect(mockedActions).toEqual({
      SET_TEST_LOADING: 'SET_TEST_LOADING',
      SET_TEST_DATA: 'SET_TEST_DATA',
    })
  })
})
