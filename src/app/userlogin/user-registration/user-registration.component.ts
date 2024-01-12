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
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    })
  }

  onFormSubmitted() {
    console.log(this.reactiveForm.value);
    const formvalue = this.reactiveForm.value

    this.userServce.signUp(formvalue).subscribe((res) => {
      const token = (res as { token: string }).token
      this.router.navigate(['userlogin'])
      this.toast.success("User Registered Successfully")
    })
    this.reactiveForm.reset({
      email: null,
      username: null,
      password: null
    })
  }
}

