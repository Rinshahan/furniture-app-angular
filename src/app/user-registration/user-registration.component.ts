import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  reactiveForm!: FormGroup

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onFormSubmitted() {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.get('email')?.value);
    console.log('Form validity:', this.reactiveForm.valid);
    this.reactiveForm.reset({
      email: null,
      username: null,
      password: null
    })
  }
}
