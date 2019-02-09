import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route guards
import { AuthGuard } from './auth.guard';

// Components
import { LoginComponent } from '../components/login/login.component';
import { UserAccountComponent } from '../components/user-account/user-account.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user/:username',
    component: UserAccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
