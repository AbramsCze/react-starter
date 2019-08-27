// libs
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { toastsReducer } from 'react-toastify-redux'

//others
import { default as cvReducer } from './cv'
import { StoreState } from '../types/global'

export default combineReducers<StoreState>({
  form: formReducer,
  toasts: toastsReducer,
  cv: cvReducer
})
