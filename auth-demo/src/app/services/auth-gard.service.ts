import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGard implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }
 //optional route parameter
  canActivate(route, state: RouterStateSnapshot){
    if(this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], {
      queryParams : {
        returnUrl:state.url
      }
    });
    return false;
  }

}
