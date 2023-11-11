import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showSearchBox: boolean;
  showCart: boolean;
  loggedIn: boolean;
  searchData: string = 'all';
  constructor(private userService: UserService, private search: SearchService) {
  }
  ngOnInit(): void {
    this.showSearchBox = this.userService.showSearchBox
    this.showCart = this.userService.showCart
    this.loggedIn = this.userService.isLogged
  }

  searchProduct() {
    this.search.searchData = this.searchData
    this.search.search()
  }
}
