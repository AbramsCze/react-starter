// libs
import { createAction, Action } from 'redux-actions'

// others
import { CvActionsTypes } from '../constants/actions'
import { copyActionKeysToValues } from '../utils/utils'

copyActionKeysToValues(CvActionsTypes)

export const setCvLoading = createAction<boolean>(CvActionsTypes.SET_CV_LOADING)
export type SetCvLoadingAction = Action<boolean>

export const setCvData = createAction<Array<User>>(CvActionsTypes.SET_CV_DATA)
export type SetCvDataAction = Action<Array<User>>

export const getUserDetail = createAction<number>(CvActionsTypes.GET_USER_DETAIL)
export type GetUserDetailAction = Action<number>