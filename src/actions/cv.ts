// libs
import { createAction, Action } from 'redux-actions'

// others
import { CvActionsTypes } from '../constants/actions'
import { copyActionKeysToValues } from '../utils/utils'

copyActionKeysToValues(CvActionsTypes)

export const setCvLoading = createAction<boolean>(CvActionsTypes.SET_CV_LOADING)
export type SetCvLoadingAction = Action<boolean>

export const setCvData = createAction<Array<string>>(CvActionsTypes.SET_CV_DATA)
export type SetCvDataAction = Action<Array<string>>
