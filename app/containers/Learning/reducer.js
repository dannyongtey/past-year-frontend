import {
  SET_KEYWORD, FETCH_KEYWORDS, FETCH_KEYWORDS_SUCCEEDED, FETCH_KEYWORDS_FAILED,
} from './constants'

const initState = {
  keyword: '',
  validKeywords: [],
  loading: false,
  error: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return { ...state, keyword: action.keyword }
    case FETCH_KEYWORDS:
      return { ...state, loading: true }
    case FETCH_KEYWORDS_SUCCEEDED:
      return { ...state, validKeywords: action.keywords, loading: false }
    case FETCH_KEYWORDS_FAILED:
      return { ...state, error: action.error, loading: false }
    default:
      return state
  }
}
