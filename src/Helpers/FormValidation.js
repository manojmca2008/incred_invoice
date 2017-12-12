import { BLANK_VALId, EMAIL_VALId, SIXDIGIT_VALId,PHONENOPRANK_VALId,PHONEFORMAT_VALId, PHONEMATCH_VALId } from './../Constant/Messages';

function Email(inputVal){
  let error = inputVal;
  let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let errormes
  if (!error) {
    errormes = BLANK_VALId
  } else if (!emailFormat.test(error)) {
    errormes = EMAIL_VALId
  }
  return errormes
}



function RequireVal(inputVal){
  let error = inputVal;
  let errormes
  if(!error){
    errormes = BLANK_VALId
  }
  return errormes
}

function Phone(inputVal){
  let error = inputVal;
  let errormes
  if(!error){
    errormes = PHONENOPRANK_VALId
  } else if ( error.length < 10 ){
    errormes = PHONEFORMAT_VALId
  }
  return errormes
}

function Password(inputVal){
  let error = inputVal;
  let errormes
  if(!error){
    errormes = BLANK_VALId
  } else if ( error.length < 6 ){
    errormes = SIXDIGIT_VALId
  }
  return errormes
}

function ConformPassword(password1, password2){
  let pass1  = password1;
  let pass2  = password2;
  let errormes
  if(!pass2){
    errormes = BLANK_VALId
  } else if ( pass2.length < 6 ){
    errormes = SIXDIGIT_VALId
  }else if(pass1 && pass2){
    if (pass1 !== pass2) {
      errormes = PHONEMATCH_VALId
    }
  }
  return errormes
}

function PhoneNumberFormat(inputVal){
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



export { Email, Password, RequireVal, Phone, ConformPassword, PhoneNumberFormat}