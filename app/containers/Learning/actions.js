import {
  SET_KEYWORD,
  FETCH_KEYWORDS,
  FETCH_KEYWORDS_SUCCEEDED,
  FETCH_KEYWORDS_FAILED,
} from './constants'

export function setKeyword(keyword) {
  return {
    type: SET_KEYWORD,
    keyword,
  }
}

export function fetchKeywords() {
  return {
    type: FETCH_KEYWORDS,
  }
}

export function keywordsFetched(keywords) {
  return {
    type: FETCH_KEYWORDS_SUCCEEDED,
    keywords,
  }
}

export function keywordsFetchingError(error) {
  return {
    type: FETCH_KEYWORDS_FAILED,
    error,
  }
}
