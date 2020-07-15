import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_AUTH_LOGIN } from '../const/api.const';

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
      return response
    } catch (error) {
      console.log(error)
    }
  }


}
