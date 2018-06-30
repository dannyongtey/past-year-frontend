import { all } from 'redux-saga/effects'
import learningSaga from 'containers/Learning/saga';

export default function* rootSaga() {
  yield all([
    learningSaga(),
  ])
}
