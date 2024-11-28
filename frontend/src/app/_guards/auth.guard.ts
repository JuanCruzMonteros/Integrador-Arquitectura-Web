import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../shared/services/shared.service';

export const authGuard: CanActivateFn = (route, state) => {

  const sharedService = inject(SharedService);
  const router = inject(Router);

  // const cookieService = inject(CookieService);
  const usuario = sharedService.obtenerSesion();
  // let token = cookieService.get('Authorization');
  if( usuario !== null )  // token && usuario
  {
    return true;
  }
  else{
    router.navigate(['login']);
    return false;
  }
};