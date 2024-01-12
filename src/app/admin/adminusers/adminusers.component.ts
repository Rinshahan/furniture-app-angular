import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/core/models/api.model';
import { user } from 'src/app/core/models/user.model';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {
  adminUsers: user[] = []
  constructor(private adminService: AdminService, private toast: ToastrService) { }
  ngOnInit(): void {
    this.adminService.getAdminUsers().subscribe((res: UserResponse) => {
      this.adminUsers = res.data.users
    }, (err) => {
      this.toast.error(err.error.message)
    })
    console.log(this.adminUsers);
  }
  isSideBarCollapsed: boolean = false



  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
}
