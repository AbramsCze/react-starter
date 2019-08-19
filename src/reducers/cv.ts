// libs
import { handleActions } from 'redux-actions'

// others
import { CvInitialState } from '../models/cv'
import { setCvLoading, setCvData, SetCvLoadingAction, SetCvDataAction } from '../actions/cv'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<CvState, any>(
  {
    [setCvLoading.toString()]: (state: CvState, action: SetCvLoadingAction) => {
      return {
        ...state,
        loading: action.payload
      }
    },

    [setCvData.toString()]: (state: CvState, action: SetCvDataAction) => {
      return {
        ...state,
        loading: false,
        cvs: action.payload
      }
    }
  },
  CvInitialState,
)
