import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {
  constructor(private http: Http, router: Router) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(responce =>{
      let result =   responce.json();
      if(result  && result.token)
      {
        localStorage.setItem('token',result.token);
        return true;
      }else{
        return false;
      }
      })
  }

  logout() { 
    
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    //1st way
    return tokenNotExpired();
    
     //2nd way
  // let jwtHelper = new JwtHelper();
  // let token = localStorage.getItem('token');
  // if(!token)
  //   return false;
  // let expresionDate =  jwtHelper.getTokenExpirationDate(token);
  // let isExpire = jwtHelper.isTokenExpired(token);
  // console.log('expresionDate', expresionDate);
  // console.log('isExpire', isExpire);

  //   return !isExpire;
  }
   get currentUser(){
    let token  = localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelper().decodeToken(token);
   }
}

