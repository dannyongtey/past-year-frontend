import { SET_USER_NAME, SET_DOWNLOAD_ID, SET_DOWNLOAD_DATA, LOG_OUT_USER, CHECK_LOG_IN, LOG_IN_USER } from './constants'

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

export function setDownloadID(data){
  return {
    type: SET_DOWNLOAD_ID,
    data,
  }
}

export function loginUser(data){
  return {
    type: LOG_IN_USER,
    data
  }
}

export function checkLogin(){
  return {
    type: CHECK_LOG_IN,
    data: {},
  }
}

export function logoutUser(){
  return {
    type: LOG_OUT_USER,
  }
}


