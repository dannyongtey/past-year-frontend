import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'X-Requested-With': 'XMLHttpRequest',
}

axios.interceptors.request.use(request => {
  // THE APP SECRET
  // request.headers.common['secret'] = 'GrN99qS0g3zsq12'
  // if (request.method !== 'get') {
  request.headers['Accept'] = 'application/json'
  // }

  // const token = store.getters['auth/token']

  return request
})

axios.interceptors.response.use(
  response => { return response; },
  error => {
    if (
      error.request.responseType === 'blob' &&
      error.response.data instanceof Blob &&
      error.response.data.type &&
      error.response.data.type.toLowerCase().indexOf('json') != -1
    ) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
          error.response.data = JSON.parse(reader.result);
          resolve(Promise.reject(error));
        };

        reader.onerror = () => {
          reject(error);
        };

        reader.readAsText(error.response.data);
      });
    };

    return Promise.reject(error);
  }
);


function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.status);
  error.response = response;
  throw error;
}

export default function request({ type, url, options }) {
  return axios[type](url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      throw err
    })
}

export function setAuthHeader(header) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.stringify(header)}`
  axios.defaults.withCredentials = true
}
