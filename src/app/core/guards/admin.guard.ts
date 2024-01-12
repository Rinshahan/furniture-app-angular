import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const adminToken = localStorage.getItem('adminToken')
  const router: Router = inject(Router)
  const toast: ToastrService = inject(ToastrService)
  if (adminToken) {
    return true
  } else {
    toast.error("Please login")
    router.navigate(['/adminlogin'])
    return false
  }
};
