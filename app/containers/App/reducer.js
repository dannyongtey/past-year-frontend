import { SET_USER_NAME, SET_DOWNLOAD_DATA, CLEAR_DOWNLOAD_DATA, SET_DOWNLOAD_ID, LOG_OUT_USER, LOG_IN_USER } from './constants'

const initState = {
  username: '',
  downloadDetails: {
    type: '',
    details: null,
  },
  downloadID: null,
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
    case SET_DOWNLOAD_ID:
      return {...state, downloadID: action.data}
    case CLEAR_DOWNLOAD_DATA:
      return {...state, downloadID: null, downloadDetails: {...initState.downloadDetails}}
    default:
      return state
  }
}
