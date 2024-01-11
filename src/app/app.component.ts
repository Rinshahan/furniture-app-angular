import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'furniture-app';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token) {
      this.userService.isLogged = true
    }
  }
}
