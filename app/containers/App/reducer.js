import { SET_USER_NAME, SET_DOWNLOAD_DATA } from './constants'

const initState = {
  username: '',
  downloadDetails: {
    type: '',
    details: null,
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, username: action.username }
    case SET_DOWNLOAD_DATA:
      return { ...state, downloadDetails: action.data }
    default:
      return state
  }
}
