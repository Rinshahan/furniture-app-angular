import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@Component({

  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  isSideBarCollapsed: boolean = false
  router: Router = inject(Router)

  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    if (this.isSideBarCollapsed) { this.isSideBarCollapsed = true }

  }
  adminSignOut() {
    localStorage.removeItem('adminToken')
    this.router.navigate(['adminlogin'])
  }
}