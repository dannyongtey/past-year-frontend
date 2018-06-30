import {
  selectGlobal,
  selectUsername,
} from 'containers/App/selectors'
import { context } from 'containers/App/constants'

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
