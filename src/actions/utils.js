import auth from '../service/auth';

export const checkErrorMessage = (message) => {
    console.log(message);
   if(message.includes("JWT")){
       auth.cleanToken();
   }
};