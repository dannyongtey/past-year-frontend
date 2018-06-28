import { context } from './constants'

export const selectGlobal = state => state[context]

export const selectUsername = state => selectGlobal(state).username
