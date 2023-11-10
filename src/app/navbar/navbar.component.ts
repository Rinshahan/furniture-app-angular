import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showSearchBox: boolean;
  showCart: boolean;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.showSearchBox = this.userService.showSearchBox
    this.showCart = this.userService.showCart
  }
}
