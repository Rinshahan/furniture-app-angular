import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  reactiveForm: FormGroup
  userServce: UserService = inject(UserService);

  constructor(private router: Router, private toast: ToastrService) { }

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

