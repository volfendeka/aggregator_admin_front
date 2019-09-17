import cookies from "react-cookies";

const auth = {

  isAuth: () => {
    console.log(cookies.load('auth'));
    const tokenIsSet = cookies.load('auth');
    if( tokenIsSet !== undefined){
      return true;
    }
    return false;
  },

  setToken: (token) => {
    cookies.save("auth", token, {
      expires: (new Date().addHours(5))
    })
  },

  getToken: () => {
    const token = cookies.load("auth");
    if(token !== undefined){
      return token;
    }
    return false;
  },

  cleanToken: () => {
    cookies.remove("auth");
  }
};

Date.prototype.addHours = function (hours) {
  this.setHours(this.getHours() + (hours * 60 * 60 * 1000))
  return this;
};

export default auth;
