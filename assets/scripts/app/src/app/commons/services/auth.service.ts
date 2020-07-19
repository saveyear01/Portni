import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_AUTH_LOGIN, API_AUTH_REGISTER } from '../const/api.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  async login(data) {
    try {
      const response = this.http.post(API_AUTH_LOGIN, data)
        .toPromise();

      this.setToken(response);
      
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async register(data) {
    try {
      const response = this.http.post(API_AUTH_REGISTER, data)
        .toPromise();

      this.setToken(response);
      
      return response
    } catch (error) {
      console.log(error)
    }
  }

  setToken(resp: any) {
    resp.then((data) => {
    window.localStorage.setItem('key', data.token);
    })
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('key');
  }

  getToken() {
    if(this.isAuthenticated()) {
      return window.localStorage.getItem('key');
    }
    return null;
  }

  removeToken() {
    window.localStorage.removeItem('key');
  }
}
