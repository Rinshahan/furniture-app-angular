import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';


export const authGuard: CanActivateFn = (route, state) => {
  const toast: ToastrService = inject(ToastrService)
  const router: Router = inject(Router)
  const token = localStorage.getItem('token')
  if (token) {
    return true
  } else {
    router.navigate(['/userlogin'])
    toast.info("You are Not Logged in Please Login")
    return false
  }
}