import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../../core/store';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', reducers)
  ]
})
export class LoginModule { }
