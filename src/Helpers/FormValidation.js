import { BLANK_VALId, EMAIL_VALId, SIXDIGIT_VALId,PHONENOPRANK_VALId,PHONEFORMAT_VALId } from './../Constant/Messages';

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

function Password(inputVal){
  let error = inputVal;
  let errormes
  if(!error){
    errormes = BLANK_VALId
  } else if ( error.length < 5 ){
    errormes = SIXDIGIT_VALId
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
function ConformPassword(inputVal){
  let error = inputVal;
  let errormes
  if(!error){
    errormes = BLANK_VALId
  } else if ( error.length < 5 ){
    errormes = SIXDIGIT_VALId
  }
  return errormes
}




export { Email, Password, RequireVal, Phone, ConformPassword}