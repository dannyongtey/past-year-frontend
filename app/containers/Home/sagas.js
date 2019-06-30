import {takeLatest,put } from 'redux-saga/effects'
import { LOG_IN_USER, CHECK_LOG_IN, LOG_OUT_USER } from 'containers/App/constants'
import {setAuthHeader} from 'utils/request'
import ls from 'local-storage'

export default function* loginSaga() {
    yield [
        takeLatest([LOG_IN_USER], login),
        takeLatest([CHECK_LOG_IN], checkLogin),
        takeLatest([LOG_OUT_USER], logout),
    ]
}

export function* login({data}) {
    setAuthHeader(data)
    ls('auth', data)
}

export function* checkLogin(){
    const data = ls('auth')
    if (data){
        yield put({type: LOG_IN_USER, data})
    }
}

export function* logout(){
    ls.remove('auth')
}



