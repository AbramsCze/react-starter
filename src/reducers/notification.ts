// libs
import { handleActions } from 'redux-actions'

// others
import { enqueueSnackbar, EnqueueSnackbarAction, closeSnackbar, removeSnackbar, CloseSnackbarAction, RemoveSnackbarAction } from '../actions/notification'

export default handleActions<Array<Snackbar>, any>(
  {
    [enqueueSnackbar.toString()]: (state: Array<Snackbar>, action: EnqueueSnackbarAction) => {
      return [ ...state, action.payload ]
    },

    [closeSnackbar.toString()]: (state: Array<Snackbar>, action: CloseSnackbarAction) => {
      return state.map(notification => (
        (action.payload.dismissAll || notification.key === action.payload.key)
          ? { ...notification, dismissed: true }
          : { ...notification }
      ))
    },

    [removeSnackbar.toString()]: (state: Array<Snackbar>, action: RemoveSnackbarAction) => {
      return state.filter(
        notification => notification.key !== action.payload
      )
    },
  },
  [],
)
