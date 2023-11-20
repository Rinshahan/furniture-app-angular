import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@Component({

  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  isSideBarCollapsed: boolean = false


  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    if (this.isSideBarCollapsed) { this.isSideBarCollapsed = true }

  }
}