import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.authService.signIn(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private'])
      },
      err => {
        console.log(err);
      })
  }

}
