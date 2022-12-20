import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  // reactive form
  loginForm!: FormGroup;
  isSubmited: boolean = false;
  returnUrl: string = '';

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    // activatedRoute = Provides access to information about a route associated with a component that is loaded in an outlet.
    // snapshot = The current snapshot of this route
    // queryParams = The query parameters shared by all the routes
    this.returnUrl = this.ar.snapshot.queryParams.returnUrl;
  }
  // methods

  // get form controls
  get fc() {
    return this.loginForm.controls;
  }

  // get email message to process by validField Function
  get emaiErrorlMssg(): string {
    // isolate error mssg
    const error = this.loginForm.get('email')?.errors;

    if (error?.['required']) {
      return 'Email is required';
    } else if (error?.['email']) {
      return 'Email format invalid';
    } else if (error?.['usedEmail']) {
      return 'Email is in use';
    }

    return '';
  }

  get passwordErrorMessage(): string {
    // isolate error mssg
    const error = this.loginForm.get('email')?.errors;

    if (error?.['required']) {
      return 'Password is required!';
    } else if (error != null) {
      return 'Password is too short!';
    }

    return '';
  }
  // function that returns true or false if login form has been touched(or not) and contains a valid value(or not)
  validField(field: string): boolean | undefined {
    return (
      this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched
    );
  }

  submit() {
    this.isSubmited = true;
    // if form is invalid don't submit information
    if (this.loginForm.invalid) return;

    // service
    this.us.login(this.loginForm.value).subscribe(() => {
      // this.messageService.add({
      //   key: 'myKey1',
      //   severity: 'success',
      //   summary: 'Login Successful!!',
      //   detail: 'User Logged successfully!',
      // });
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
