import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { rootSaga } from './sagas'
import { StoreState } from './types/global'

export function configureStore(initialState?: StoreState): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware()
  let middleware = applyMiddleware(sagaMiddleware)

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<StoreState>
  sagaMiddleware.run(rootSaga)


  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
