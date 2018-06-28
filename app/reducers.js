/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import globalReducer from 'containers/App/reducer'
import { context as globalContext } from 'containers/App/constants'
import learningReducer from 'containers/Learning/reducer'
import { context as learningContext } from 'containers/Learning/constants'

const reducer = combineReducers({
  [learningContext]: learningReducer,
  [globalContext]: globalReducer,
})

export default reducer
