import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' };
  constructor() {}

  ngOnInit(): void {}

  loginUser() {
    console.log('login',this.loginUserData);
  }
}
