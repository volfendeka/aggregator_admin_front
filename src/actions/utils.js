import auth from '../service/auth';

export const checkErrorMessage = (message) => {
    console.log(message);
   if(message.includes("Unauthorized") || message.includes("JWT") || message.includes("value: {\"alg\":")){
       auth.cleanToken();
   }
};