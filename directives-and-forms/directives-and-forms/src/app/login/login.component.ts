import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Another way to get login form without passing it as a parameter of the callback
  // @ViewChild('loginForm') loginForm: NgForm | undefined;


  // will rendere only tyhe static content
ngOnInit(): void {
  // this.loginForm.valueChanges.subscribe()
}

// ngAfterViewInit(): void {
//    will render the final content with dynamic components
// }

  submitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const value: { email: string; password: string } = form.value;
    console.log(value.password);
    console.log(value);
    
    form.setValue({ email: '', password: '' });
  }
}
