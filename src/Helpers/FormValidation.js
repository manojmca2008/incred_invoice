import { BLANK_VALId, EMAIL_VALId, SIXDIGIT_VALId, PHONENOPRANK_VALId, PHONEFORMAT_VALId, PHONEMATCH_VALId, TC_VALId } from './../Constant/Messages';

function Email(inputVal) {
  let value = inputVal;
  let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let errormes = '';
  let hasError = false;
  if (!value) {
    errormes = BLANK_VALId;
    hasError = true;
  } else if (!emailFormat.test(value)) {
    errormes = EMAIL_VALId;
    hasError = true;
  }
  return [errormes, hasError]
}

function Password(inputVal) {
  let value = inputVal;
  let errormes = '';
  let hasError = false;
  if (!value) {
    errormes = BLANK_VALId;
    hasError = true;
  } else if (value.length < 6) {
    errormes = SIXDIGIT_VALId;
    hasError = true;
  }
  return [errormes, hasError]
}

function RequireVal(inputVal) {
  let value = inputVal;
  let errormes = '';
  let hasError = false;
  if (!value) {
    errormes = BLANK_VALId;
    hasError = true;
  }
  return [errormes, hasError]
}

function Phone(inputVal) {
  let value = inputVal;
  let errormes = '';
  let hasError = false;
  if (!value) {
    errormes = PHONENOPRANK_VALId;
    hasError = true;
  } else if (value.length < 10) {
    errormes = PHONEFORMAT_VALId;
    hasError = true;
  }
  return [errormes, hasError]
}

function ConformPassword(password1, password2) {
  let pass1 = password1;
  let pass2 = password2;
  let errormes = '';
  let hasError = false;
  if (!pass2) {
    errormes = BLANK_VALId;
    hasError = true;
  } else if (pass2.length < 6) {
    errormes = SIXDIGIT_VALId;
    hasError = true;
  } else if (pass1 && pass2) {
    if (pass1 !== pass2) {
      errormes = PHONEMATCH_VALId;
      hasError = true;
    }
  }
  return [errormes, hasError]
}

function PhoneNumberFormat(inputVal) {
  /*let inputval = inputVal;
  let PhoneFormat = new RegExp(/[^-0-9 !@#$%^&*()+,:;.",]/g);
  let key =  window.event;
  console.log(key)
  if(key ===37 || key ===38 || key ===39 ||key ===40 || key === 8 || key === 46){
      return true ;
  }
  let value = inputval.replace(PhoneFormat , "");
  value = inputval.trim().replace(/\./g,'');  
  if(value.length > 11) {
    inputVal.val(value.substr(0, 11));
  }else{
    inputVal.val(value);
  } */
};

function CheckboxTrue(inputVal) {
  let value = inputVal;
  let errormes = '';
  let hasError = false;
  if (value === true) {
    errormes = TC_VALId;
  }
  console.log(errormes);
  return [errormes, hasError]
}

export { Email, Password, RequireVal, Phone, ConformPassword, PhoneNumberFormat, CheckboxTrue }