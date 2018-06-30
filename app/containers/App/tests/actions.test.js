import { SET_USER_NAME } from 'containers/App/constants'
import { setUsername } from 'containers/App/actions'

describe('Learning Actions', () => {
  describe('setKeyword', () => {
    it('should return the correct type and the passed keyword', () => {
      const fixture = 'test'
      const expectedResult = {
        type: SET_USER_NAME,
        username: fixture,
      }

      expect(setUsername(fixture)).toEqual(expectedResult)
    })
  })
})
