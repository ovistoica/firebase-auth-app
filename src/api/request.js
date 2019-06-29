import axios from 'axios';
import firebase from '../../config/firebase.json';

const API_URL = firebase.api;

const client = (() => {
  return axios.create({
    baseURL: API_URL
  });
})();

const request = function(options, accessInfo) {
  const onSuccess = function(response) {
    console.log('Request Successful!', response);

    return response.data;
  };

  const onError = function(error) {
    console.log('Request Failed!', error.response);

    return Promise.reject(error);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
