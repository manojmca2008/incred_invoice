import { BLANK_VALId, EMAIL_VALId, SIXDIGIT_VALId } from './../Constant/Messages';

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
  console.log();
  let errormes
  if(!error){
    errormes = BLANK_VALId
  } else if ( error.length < 6 ){
    errormes = SIXDIGIT_VALId
  }
  return errormes
}

export { Email, Password}