// libs
import { createAction, Action } from 'redux-actions'

// others
import { NotificationActionsTypes } from '../constants/actions'
import { copyActionKeysToValues } from '../utils/utils'

copyActionKeysToValues(NotificationActionsTypes)

export const enqueueSnackbar = createAction<Snackbar, Snackbar>(NotificationActionsTypes.ENQUEUE_SNACKBAR, (notification) => {
  const key = notification.options && notification.options.key

  return {
    key: key || new Date().getTime() + Math.random(),
    ...notification
  }
})
export type EnqueueSnackbarAction = Action<Snackbar>

export const closeSnackbar = createAction<CloseSnackbar, number>(NotificationActionsTypes.CLOSE_SNACKBAR, (key) => ({
    dismissAll: !key,
    key
  })
)
export type CloseSnackbarAction = Action<CloseSnackbar>

export const removeSnackbar = createAction<number>(NotificationActionsTypes.REMOVE_SNACKBAR)
export type RemoveSnackbarAction = Action<number>