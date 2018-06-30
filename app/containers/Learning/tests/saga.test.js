import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_KEYWORDS } from 'containers/Learning/constants'
import { keywordsFetched, keywordsFetchingError } from 'containers/Learning/actions'
import learningSaga, { getValidKeywords } from 'containers/Learning/saga'

describe('getValidKeywords Saga', () => {
  let getValidKeywordsGenerator

  beforeEach(() => {
    getValidKeywordsGenerator = getValidKeywords()
    getValidKeywordsGenerator.next()
  })

  it('should dispatch the keywordsFetched action if it requests the data successfully', () => {
    const response = [
      { id: 1, name: 'react', url: 'https://react.com' },
      { id: 2, name: 'redux', url: 'https://redux.com' },
    ]
    const putDescriptor = getValidKeywordsGenerator.next(response).value
    expect(putDescriptor).toEqual(put(keywordsFetched(response)))
  })

  it('should call the keywordsFetchingError action if the response errors', () => {
    const response = new Error('error')
    const putDescriptor = getValidKeywordsGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(keywordsFetchingError(response)))
  })
})

describe('Learning Saga', () => {
  const learningPageSaga = learningSaga()

  it('should start task to watch for FETCH_KEYWORDS action', () => {
    const takeLatestDescriptor = learningPageSaga.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(FETCH_KEYWORDS, getValidKeywords))
  })
})
