import { call, put, takeLatest } from 'redux-saga/effects'
import { callFetchKeywords } from 'requests'
import { FETCH_KEYWORDS } from './constants'
import { keywordsFetched, keywordsFetchingError } from './actions'

export function* getValidKeywords() {
  try {
    const keywords = yield call(callFetchKeywords)
    yield put(keywordsFetched(keywords))
  } catch (error) {
    yield put(keywordsFetchingError(error))
  }
}

export default function* learningSaga() {
  yield takeLatest(FETCH_KEYWORDS, getValidKeywords)
}
