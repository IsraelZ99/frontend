import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authServices: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp() {
    this.authServices.signUp(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/private']);
      },
      err => {
        console.log(err);
      })
  }

}
