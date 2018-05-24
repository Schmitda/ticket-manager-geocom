import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserStatService} from './user-stat.service';
import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  constructor(private userState: UserStatService, private userService: UserService) {
  }

}
