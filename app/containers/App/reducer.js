import { SET_USER_NAME, SET_DOWNLOAD_DATA, LOG_OUT_USER, LOG_IN_USER } from './constants'

const initState = {
  username: '',
  downloadDetails: {
    type: '',
    details: null,
  },
  auth: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, username: action.username }
    case SET_DOWNLOAD_DATA:
      return { ...state, downloadDetails: action.data }
    case LOG_IN_USER:
      return {...state, auth: action.data}
    case LOG_OUT_USER:
      return {...state, auth: {}}
    default:
      return state
  }
}
