// libs
import { createAction, Action } from 'redux-actions'

// others
import { CvActionsTypes } from '../constants/actions'
import { copyActionKeysToValues } from '../utils/utils'

copyActionKeysToValues(CvActionsTypes)

export const setCvLoading = createAction(
  CvActionsTypes.SET_CV_LOADING,
  (loading: boolean) => loading,
)

export type SetCvLoadingAction = Action<typeof setCvLoading>

export const setCvData = createAction(
  CvActionsTypes.SET_CV_DATA,
  (data: Array<string>) => data,
)
