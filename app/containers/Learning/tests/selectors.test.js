import {
  selectLearning,
  selectKeyword,
} from '../selectors'
import { context } from '../constants'

describe('selectGlobal', () => {
  const keyword = 'key_word'
  const learningState = { keyword }
  const mockedState = {
    [context]: learningState,
  }

  it('should select Learning state', () => {
    expect(selectLearning(mockedState)).toEqual(learningState)
  })

  it('should select the keyword', () => {
    expect(selectKeyword(mockedState)).toEqual(keyword)
  })
})
