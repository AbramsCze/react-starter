import { combineReducers } from 'redux'
import todos from './todos'

export interface RootState {
  todos: TodoStoreState
}

export default combineReducers<RootState>({
  todos,
})
