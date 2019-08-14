// libs
import { handleActions } from 'redux-actions'

// others
import { CvInitialState } from '../models/cv'
import { setCvLoading, setCvData } from '../actions/cv'

export default handleActions<CvState, any>(
  {
    [setCvLoading.toString()]: (state: CvState, action) => {
      return {
        ...state,
        loading: action.payload
      }
    },

    [setCvData.toString()]: (state: CvState, action) => {
      return {
        ...state,
        loading: false,
        cvs: action.payload
      }
    }
  },
  CvInitialState,
)
