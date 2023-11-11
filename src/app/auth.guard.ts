import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const service: UserService = inject(UserService)
  const router: Router = inject(Router)
  if (service.isLogged) {
    return true
  } else {
    alert("You are Not Logged in Please Login")
    router.navigate(['userlogin'])
    return false
  }
};
