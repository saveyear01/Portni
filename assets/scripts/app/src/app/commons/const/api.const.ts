import { urlFormat } from '../utils/http.utils';
import { API_URL } from './config.const';


//user auth api
export const API_AUTH = urlFormat(API_URL, 'users', 'auth')
export const API_AUTH_LOGIN = urlFormat(API_AUTH, 'login')
export const API_AUTH_REGISTER = urlFormat(API_AUTH, 'register')
