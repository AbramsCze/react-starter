// libs
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

//others
import { default as cvReducer } from './cv'
import { default as notificationReducer } from './notification'
import { StoreState } from '../types/global'

export default combineReducers<StoreState>({
  form: formReducer,
  cv: cvReducer,
  notifications: notificationReducer,
})
