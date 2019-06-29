import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'


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

export default function request({type, url, options}) {
  return axios[type](url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      throw err
    })
}
