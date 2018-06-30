import { createStore, applyMiddleware, compose } from 'redux'
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
