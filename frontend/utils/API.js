import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: '/api/',
  responseType: 'json',
  headers: {
    'X-REQUESTED-WITH': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(config => {
  config.headers['X-CSRFToken'] = Cookies.get('csrftoken');
  return config;
});

const setupCsrf = () => API.get('set_csrf/');

const register = payload => API.post('auth/register/', payload);

const login = payload => API.post('auth/login/', payload);

const socialAuth = payload => API.post('auth/social-auth/', payload);

const logout = () => API.post('auth/logout/');

const refresh = () => API.post('auth/token/refresh/');

const resetPassword = payload => API.post('auth/password-reset/', payload);

const completePasswordReset = payload => API.post('auth/password-reset/complete/', payload);

export {
  setupCsrf,
  register,
  login,
  socialAuth,
  logout,
  refresh,
  resetPassword,
  completePasswordReset,
};
