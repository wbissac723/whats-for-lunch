import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserNavbarComponent
  ],
  exports: [
    UserAccountComponent,
    UserNavbarComponent
  ],
  imports: [
    CommonModule,
    UserNavbarModule,
  ]
})
export class UserAccountModule { }
