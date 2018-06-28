import { context } from './constants'

export const selectLearning = state => state[context]

export const selectKeyword = state => selectLearning(state).keyword
