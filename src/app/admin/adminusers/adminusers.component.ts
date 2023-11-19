import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/core/models/user.model';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {
  adminUsers: user[] = []
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminUsers = this.adminService.adminUsers
    console.log(this.adminUsers);
  }
  isSideBarCollapsed: boolean = false


  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
}
