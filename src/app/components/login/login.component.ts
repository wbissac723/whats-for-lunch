import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LoginState } from './store';
import { Login } from './store/login.actions';
import { isLoading } from './store/login.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoading: boolean;
  public loginForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private store: Store<LoginState>
  ) { }

  ngOnInit() {
    this.store.select(isLoading).subscribe((status: boolean) =>  this.isLoading = status);

    this.createLoginForm();

    this.onFormChanges();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFormChanges() {
    this.loginForm.valueChanges.subscribe(values => {

      // TODO create validators for each control and track them

    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(username: string, password: string) {
    this.store.dispatch(new Login({ username, password }));
  }

}
