import learningReducer from 'containers/Learning/reducer'
import {
  setKeyword, fetchKeywords, keywordsFetched, keywordsFetchingError,
} from 'containers/Learning/actions'

describe('learningReducer', () => {
  let state
  const mockKeywords = [
    { id: 1, name: 'react', url: 'https://react.com' },
    { id: 2, name: 'redux', url: 'https://redux.com' },
  ]
  beforeEach(() => {
    state = {
      keyword: '',
      validKeywords: [],
      loading: false,
      error: false,
    }
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(learningReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle setKeyword action correctly', () => {
    const expectedResult = { ...state, keyword: 'react' }
    expect(learningReducer(state, setKeyword('react'))).toEqual(expectedResult)
  })

  it('should handle fetchKeywords action correctly', () => {
    const expectedResult = { ...state, loading: true }
    expect(learningReducer(state, fetchKeywords())).toEqual(expectedResult)
  })

  it('should handle keywordsFetched action correctly', () => {
    const expectedResult = { ...state, validKeywords: mockKeywords }
    expect(learningReducer(state, keywordsFetched(mockKeywords))).toEqual(expectedResult)
  })

  it('should handle keywordsFetchingError action correctly', () => {
    const mockError = new Error('error')
    const expectedResult = { ...state, error: mockError }
    expect(learningReducer(state, keywordsFetchingError(mockError))).toEqual(expectedResult)
  })
})
