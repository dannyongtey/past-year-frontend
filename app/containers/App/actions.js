import { SET_USER_NAME, SET_DOWNLOAD_DATA, SET_ERROR_MESSAGE } from './constants'

export function setUsername(username) {
  return {
    type: SET_USER_NAME,
    username,
  }
}

export function setDownloadData(data){
  return {
    type: SET_DOWNLOAD_DATA,
    data,
  }
}


