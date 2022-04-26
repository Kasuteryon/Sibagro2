import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/user-login';
import { Observable } from 'rxjs';

const AUTH_URL = "https://sibagro-web-api.herokuapp.com/v1/Identity/Login-N";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  access(user:UserLogin): Observable<UserLogin>{
    return this.httpClient.post<UserLogin>(`${AUTH_URL}`, user);
  }
}

