import { all } from 'redux-saga/effects'
import downloadSaga from 'containers/Download/sagas';

export default function* rootSaga() {
  yield all([
    downloadSaga()
  ])
}
