import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const adminToken = localStorage.getItem('adminToken')
  if (adminToken) {
    return true
  } else {
    return false
  }
};
