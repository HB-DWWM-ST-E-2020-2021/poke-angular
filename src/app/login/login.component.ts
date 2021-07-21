import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Token} from './token';
import {Credentials} from './credentials';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Build a new FormControl using Angular's FormBuilder.
   * Add 2 attributes (email and password), both with an empty string as default values and with
   */
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    // Set all inputs as touched (display errors of email and password when direct click on submit button).
    this.form.markAllAsTouched();

    // If the form is valid (all inputs valids).
    if (this.form.valid) {
      // Forge HTTP request to send to the API to retrieve JWT.
      this.httpClient.post<Token>('https://localhost:8000/authentication_token', this.form.value as Credentials).subscribe(
        (data) => {
          // When success. Save the JWT in local storage.
          localStorage.setItem('access_token', data.token);

          // Then redirect Angular page to home.
          this.router.navigate(['']);
        },
        (e: {error: {code: number, message: string}}) => {
          // When error.
          alert(e.error.message);
        },
      );
    }
  }
}
