import auth from '../service/auth';

export const checkErrorMessage = (message) => {
    console.log(message);
   if(message.includes("Unauthorized") || message.includes("JWT") || message.includes('Unable to read JSON value: {"alg')){
       auth.cleanToken();
   }
};