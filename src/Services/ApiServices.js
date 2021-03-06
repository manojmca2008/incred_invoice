import { apiUrl } from '../Config/Constants';
import axios from 'axios';
//import $ from 'jquery';

export function userDetails(userID) {
  return axios.get(apiUrl + 'user/'+userID)
    .then(response => {      
      return response.data.response;
    });
}
export function validateOtp(otp) {
  return axios.get(apiUrl + 'validate-otp/'+otp)      
    .then(response => {      
      return response.data.response;
    });
}
export function register(data) {
  return axios.post(apiUrl + 'signup', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}
export function signin(data) {
  return axios.post(apiUrl + 'signin', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}

export function checkLogin(data){
  return axios.post(apiUrl + 'signin', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}
export function getUserAccounts(userId) {
  return axios.get(apiUrl + 'user-accounts?userId='+userId)
    .then(response => {
      return response.data.response;
    });
}
export function getUserAccountDetails(userId) {
  return axios.get(apiUrl + 'user-accounts/'+userId)
    .then(response => {
      return response.data.response;
    });
}

export function getUserDetails() {
  return axios.get(apiUrl + 'user-details')
    .then(response => {
      return response.data.response;
    });
}

export function addAccount(data) {
  return axios.post(apiUrl + 'user-accounts', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}
export function resendOtp(data) {
  return axios.post(apiUrl + 'resend-otp', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}
export function forgotPassword(data) {
  return axios.post(apiUrl + 'forget-password', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}
export function resetPassword(data) {
  return axios.post(apiUrl + 'reset-password', data).then(response => {
    return response.data.response;
  }).catch(err => {
    return err;
  });
}

