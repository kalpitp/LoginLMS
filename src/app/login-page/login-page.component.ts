import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email:string='';
  password:string='';
  rememberMe: boolean = false;

  constructor() { }

  // You can implement methods here to save and retrieve the remembered state
  // For example:
  saveRememberedState(): void {
    localStorage.setItem('rememberMe', this.rememberMe ? 'true' : 'false');
  }

  retrieveRememberedState(): void {
    const rememberMeValue = localStorage.getItem('rememberMe');
    if (rememberMeValue) {
      this.rememberMe = rememberMeValue === 'true';
    }
  }

  // You may call these methods based on your application logic (e.g., in ngOnInit)
}
