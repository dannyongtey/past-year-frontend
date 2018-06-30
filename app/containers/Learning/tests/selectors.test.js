import {
  selectLearning, selectKeyword, selectValidKeywords, selectLoading, selectError,
} from 'containers/Learning/selectors'
import { context } from 'containers/Learning/constants'

describe('selectGlobal', () => {
  const mockState = {
    keyword: 'key_word',
    validKeywords: ['react', 'redux'],
    loading: false,
    error: false,
  }

  const mockedState = {
    [context]: mockState,
  }

  it('should select Learning state', () => {
    expect(selectLearning(mockedState)).toEqual(mockState)
  })

  it('should select keyword', () => {
    expect(selectKeyword(mockedState)).toEqual(mockState.keyword)
  })

  it('should select validKeywords', () => {
    expect(selectValidKeywords(mockedState)).toEqual(mockState.validKeywords)
  })

  it('should select loading', () => {
    expect(selectLoading(mockedState)).toEqual(mockState.loading)
  })

  it('should select error', () => {
    expect(selectError(mockedState)).toEqual(mockState.error)
  })
})
