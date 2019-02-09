import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public loginForm: FormGroup;
  public subscription$: Subscription;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.createLoginForm();
    this.handleFormChanges();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleFormChanges() {
    this.loginForm.valueChanges.subscribe(values => {

      // TODO create validators for each control and track them

    });
  }

  onSubmit(username: string, password: string) {
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }

  }
}
