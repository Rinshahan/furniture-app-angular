import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  searchData: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor(private userService: UserService, private search: SearchService) {
  }
  ngOnInit(): void {
    this.showSearchBox = this.userService.showSearchBox
    this.showCart = this.userService.showCart
    this.loggedIn = this.userService.isLogged
    console.log(this.searchData);

  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchData)
  }

  // searchProduct() {
  //   console.log(this.searchData);
  //   this.search.searchData = this.searchData
  //   this.search.search()
  //   this.onSearchTextChanged()
  // }
}
