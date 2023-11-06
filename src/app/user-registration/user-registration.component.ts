import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  reactiveForm!: FormGroup
  userServce: UserService = inject(UserService);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onFormSubmitted() {
    console.log(this.reactiveForm);
    const formvalue = this.reactiveForm.value
    this.userServce.user.push(formvalue);
    this.userServce.signUp()
    this.reactiveForm.reset({
      email: null,
      username: null,
      password: null
    })

  }


}
