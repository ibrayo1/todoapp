import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28Minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    // console.log(this.username);
    if (this.username === 'in28Minutes' && this.password === 'dummy'){
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}