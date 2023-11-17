import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent {
  reactiveForm: FormGroup
  adminServce: AdminService = inject(AdminService);

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
    this.reactiveForm.reset({
      email: null,
      username: null,
      password: null
    })
  }

}
