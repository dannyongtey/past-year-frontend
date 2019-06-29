/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { snackbarReducer } from 'react-redux-snackbar';
import globalReducer from 'containers/App/reducer'
import { context as globalContext } from 'containers/App/constants'

const reducer = combineReducers({
  [globalContext]: globalReducer,
  snackbar: snackbarReducer,
})

export default reducer
