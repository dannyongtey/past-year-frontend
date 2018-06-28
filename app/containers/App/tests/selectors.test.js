import {
  selectGlobal,
  selectUsername,
} from '../selectors'
import { context } from '../constants'

describe('selectGlobal', () => {
  const username = 'user_name'
  const globalState = { username }
  const mockedState = {
    [context]: globalState,
  }

  it('should select global state', () => {
    expect(selectGlobal(mockedState)).toEqual(globalState)
  })

  it('should select the username', () => {
    expect(selectUsername(mockedState)).toEqual(username)
  })
})
