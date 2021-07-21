import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (
      0 !== this.email.trim().length &&
      0 !== this.password.trim().length
    ) {
      this.httpClient.post<{token: string}>('https://localhost:8000/authentication_token', {
        email: this.email,
        password: this.password,
      }).subscribe((data) => {
        localStorage.setItem('access_token', data.token);
        // connected
        this.router.navigate(['']);
      });
    }
  }
}
