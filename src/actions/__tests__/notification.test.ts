// others
import { NotificationActionsTypes } from '../../constants/actions'
import { enqueueSnackbar, closeSnackbar, removeSnackbar } from '../notification'

describe('notification actions', () => {

  it('should create action to enqueue snackbar', () => {
    const expectedAction = {
      type: NotificationActionsTypes.ENQUEUE_SNACKBAR,
      payload: { key: 12, message: 'test message' },
    }
    expect(enqueueSnackbar({ key: 12, message: 'test message' })).toEqual(expectedAction)
  })

  it('should create action to close snackbar', () => {
    const expectedAction = {
      type: NotificationActionsTypes.CLOSE_SNACKBAR,
      payload: { dismissAll: false, key: 2 },
    }
    expect(closeSnackbar(2)).toEqual(expectedAction)
  })

  it('should create action to close all snackbar', () => {
    const expectedAction = {
      type: NotificationActionsTypes.CLOSE_SNACKBAR,
      payload: { dismissAll: true, key: 0 },
    }
    expect(closeSnackbar(0)).toEqual(expectedAction)
  })

  it('should create action to remove snackbar', () => {
    const expectedAction = {
      type: NotificationActionsTypes.REMOVE_SNACKBAR,
      payload: 3,
    }
    expect(removeSnackbar(3)).toEqual(expectedAction)
  })
})
