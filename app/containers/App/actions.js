import { SET_USER_NAME, SET_DOWNLOAD_DATA } from './constants'

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
