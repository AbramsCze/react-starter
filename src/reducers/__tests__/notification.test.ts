//others
import notification from '../notification'
import { enqueueSnackbar, closeSnackbar, removeSnackbar } from '../../actions/notification'

describe('notification reducer', () => {
  let notifications: Array<Snackbar>
  let notification1: Snackbar
  let notification2: Snackbar
  let notification3: Snackbar

  beforeAll(() => {
    notification1 = { key: 1, message: 'test jedna' }
    notification2 = { key: 2, message: 'test dva' }
    notification3 = { key: 3, message: 'test tři' }
    notifications = [notification1, notification2, notification3]
  })

  it('should handle one enqueueSnackbar', () => {
    const state = notification(
      [],
      enqueueSnackbar(notification1)
    )
    expect(state).toEqual([notification1])
  })

  it('should handle three enqueueSnackbar', () => {
    let state = notification(
      [],
      enqueueSnackbar(notification1)
    )
    state = notification(
      state,
      enqueueSnackbar(notification2)
    )
    state = notification(
      state,
      enqueueSnackbar(notification3)
    )
    expect(state).toEqual(notifications)
  })

  it('should handle closeSnackbar', () => {
    let state = notification(
      [],
      enqueueSnackbar(notification2)
    )
    state = notification(
      state,
      closeSnackbar(2)
    )
    expect(state).toEqual([{ key: 2, message: 'test dva', dismissed: true }])
  })

  it('should handle closeSnackbar (dismissAll)', () => {
    let state = notification(
      [],
      enqueueSnackbar(notification1)
    )
    state = notification(
      state,
      enqueueSnackbar(notification2)
    )
    state = notification(
      state,
      enqueueSnackbar(notification3)
    )
    state = notification(
      state,
      closeSnackbar(0)
    )
    expect(state).toEqual([{ key: 1, message: 'test jedna', dismissed: true }, { key: 2, message: 'test dva', dismissed: true }, { key: 3, message: 'test tři', dismissed: true }])
  })

  it('should handle removeSnackbar', () => {
    let state = notification(
      [],
      enqueueSnackbar(notification1)
    )
    state = notification(
      state,
      enqueueSnackbar(notification2)
    )
    state = notification(
      state,
      enqueueSnackbar(notification3)
    )
    state = notification(
      state,
      removeSnackbar(2)
    )
    expect(state).toEqual([notification1, notification3])
  })
})
