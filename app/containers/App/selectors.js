import { context } from './constants'

export const selectGlobal = state => state[context]

export const selectUsername = state => selectGlobal(state).username

export const selectAuth = state => selectGlobal(state).auth
