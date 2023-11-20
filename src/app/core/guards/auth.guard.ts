import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';


export const authGuard: CanActivateFn = (route, state) => {
  const service: UserService = inject(UserService)
  const toast: ToastrService = inject(ToastrService)
  const router: Router = inject(Router)
  if (service.isLogged) {
    return true
  } else {
    toast.info("You are Not Logged in Please Login")
    router.navigate(['/usersignup'])
    return false
  }
}