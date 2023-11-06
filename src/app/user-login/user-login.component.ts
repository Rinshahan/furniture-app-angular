import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @ViewChild('loginForm') form!: NgForm


  onFormSubmitted() {
    console.log(this.form);
    console.log(this.form.value.username);
    this.form.reset()
  }
}
