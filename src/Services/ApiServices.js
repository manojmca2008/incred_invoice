import { apiUrl } from '../Config/Constants';
import axios from 'axios';
import $ from 'jquery';

export function userDetails(userID) {
  return axios.get(apiUrl + 'user/'+userID)
    .then(response => {      
      return response.data;
    });
}
export function validateOtp(otp) {
  return axios.get(apiUrl + 'signup/'+otp)
    .then(response => {      
      return response.data;
    });
}
export function register(data) {
  return axios.post(apiUrl + 'signup', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });;
}

export function checkLogin(data){
  return axios.post(apiUrl + 'signin', data).then(response => {
    return response.data;
  }).catch(err => {
    return err;
  });
}
export function getInvoices(invoiceId) {
  return axios.get(apiUrl + 'invoices')
    .then(response => {
      return response.data;
    });
}


