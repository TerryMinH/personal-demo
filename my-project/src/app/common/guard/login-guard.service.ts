import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorage } from '@common/local-storage';
import { SED } from '@common/encrypt-des';

@Injectable({
  providedIn: 'root'
})

export class LoginGuardService implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): boolean {
    let canInto: boolean;
    let info = LocalStorage.getItem('userInfo');
    info = info && SED(info) || null;
    // console.log('info', info);
    if (!info || !info.token) {
      canInto = false;
      this.router.navigateByUrl('passport/login');
    } else {
      canInto = true;
    }
    // console.log('canInto', canInto);
    return canInto ? true : false;
  }
}