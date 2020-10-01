const {default: axios} = require('axios');
const baseURL  = 'http://localhost:4000';
const loginURL = `${baseURL}/user/login`

export default class User {
  static logOut() {
    User.loggedIn = false; 
    User.user = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  static loggedIn = false;
  static user = ''

  static initialize() {
    User.loggedIn = localStorage.getItem('token') != null;
    User.user = User.loggedIn ? localStorage.getItem('user') : '';
  }

  static verifyLoggedIn(successEvent = () => {}, failedEvent = (err) => {}) {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.put(loginURL, { token: token })
      .then(res => {
          if (res.status === 200) {
            User.loggedIn = true;
            User.user = res.data.user;
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user);
            successEvent();
          } else {
            failedEvent(res.response);
            User.loggedIn = false; 
            User.user = '';
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }
      })
      .catch(err => {
        failedEvent(err.response);
        User.loggedIn = false; 
        User.user = '';
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
  }
}