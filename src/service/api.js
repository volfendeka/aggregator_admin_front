import auth from "./auth";

const api = {
  getAuthorizedJSONHeaders: () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth.getToken(),
    }
  },
  getJSONHeaders: () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
};

export default api;
