import { FacebookLoginService } from './services/facebook-login.service';
import { Component, OnInit, OnDestroy,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { LoginState } from './store';
import { Login } from './store/login.actions';
import { isLoading } from './store/login.selector';
import { Router } from '@angular/router';


declare const FB: any;

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
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private router:Router,
    private facebookLoginService: FacebookLoginService,
    private store: Store<LoginState>
  ) { }

  ngOnInit() {
    this.subscription$ = this.store.select(isLoading).subscribe((status: boolean) => this.isLoading = status);
    this.facebookLoginService.registerFacebookSDK();
    this.createLoginForm();
    this.handleFormChanges();
  }
  submitLogin() {
    console.log('submit login to fb');
    FB.login((response) => {
      console.log('submitlogin', response);
      if (response.authResponse) {
         this.facebookLoginService.getUserDetails(response.authResponse.userID).subscribe((data) =>{
          if(data !=null){
            console.log('data is '+data);
          //Reference :https://stackoverflow.com/questions/44745354/ngoninit-not-being-called-after-router-navigate/47480431#47480431
          this.zone.run(() => {
            this.router.navigate([`/user/${data}`]);
          });
          }
          
        });
      }
      else {
        console.log('user login failed');
      }
    });
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
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

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }

  }
}
