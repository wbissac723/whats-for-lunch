import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { LoginState } from './store';
import { Login } from './store/login.actions';
import { isLoading } from './store/login.selector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public isLoading: boolean;
  public loginForm: FormGroup;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginState>
  ) { }

  ngOnInit() {
    this.store.select(isLoading).subscribe((status: boolean) =>  this.isLoading = status);

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
    this.store.dispatch(new Login({ username, password }));
  }

}
