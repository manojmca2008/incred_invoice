import { apiUrl } from '../Config/Constants';
import axios from 'axios';
//import $ from 'jquery';

export function userDetails(userID) {
  return axios.get(apiUrl + 'user/'+userID)
    .then(response => {      
      return response.data;
    });
}
export function validateOtp(otp) {
  return axios.get(apiUrl + 'verfiy-otp/'+otp)
    .then(response => {      
      return response.data;
    });
}
export function register(data) {
  return axios.post(apiUrl + 'signup', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });
}
export function signin(data) {
  return axios.post(apiUrl + 'signin', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });
}

export function checkLogin(data){
  return axios.post(apiUrl + 'signin', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });
}
export function getUserAccounts(userId) {
  return axios.get(apiUrl + 'user-accounts?userId='+userId)
    .then(response => {
      return response.data;
    });
}
export function getUserAccountDetails(userId) {
  return axios.get(apiUrl + 'user-accounts/'+userId)
    .then(response => {
      return response.data;
    });
}
export function addAccount(data) {
  return axios.post(apiUrl + 'user-accounts', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });
}
export function resendOtp(data) {
  return axios.post(apiUrl + 'resend-otp', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });
}

