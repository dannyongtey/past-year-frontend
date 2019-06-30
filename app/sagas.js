import { all } from 'redux-saga/effects'
import downloadSaga from 'containers/Download/sagas';
import loginSaga from 'containers/Home/sagas'

export default function* rootSaga() {
  yield all([
    downloadSaga(),
    loginSaga()
  ])
}
