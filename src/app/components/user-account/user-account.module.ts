import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feature Modules
import { UserHubModule } from './components/user-hub/user-hub.module';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';

// Components
import { UserAccountComponent } from './user-account.component';
import { UserHubComponent } from './components/user-hub/user-hub.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { RestaurantModule } from '../restaurant/restaurant.module';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserNavbarComponent,
  ],
  exports: [
    UserAccountComponent,
    UserNavbarComponent,
  ],
  imports: [
    CommonModule,
    UserNavbarModule,
    UserHubModule,
    RestaurantModule
  ]
})
export class UserAccountModule { }
