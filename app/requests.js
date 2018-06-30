import request from 'utils/request'
import {
  GET_KEYWORDS,
} from 'constants/API_URL'

export function callFetchKeywords() {
  return request('get', GET_KEYWORDS)
}
