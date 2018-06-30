import { context } from './constants'

export const selectLearning = state => state[context]

export const selectKeyword = state => selectLearning(state).keyword
export const selectValidKeywords = state => selectLearning(state).validKeywords
export const selectError = state => selectLearning(state).error
export const selectLoading = state => selectLearning(state).loading
