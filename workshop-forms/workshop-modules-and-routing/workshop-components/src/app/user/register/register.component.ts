import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: [''],
    username: [''],
    tel: [''],
    passGroup: this.fb.group({
      password: [''],
      rePassword: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  register():void{
    console.log(this.form.value);
    
  }
}
