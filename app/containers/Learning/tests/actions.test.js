import { SET_KEYWORD } from 'containers/Learning/constants'
import { setKeyword } from 'containers/Learning/actions'

describe('Learning Actions', () => {
  describe('setKeyword', () => {
    it('should return the correct type and the passed keyword', () => {
      const fixture = 'react'
      const expectedResult = {
        type: SET_KEYWORD,
        keyword: fixture,
      }

      expect(setKeyword(fixture)).toEqual(expectedResult)
    })
  })
})
