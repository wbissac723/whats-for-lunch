import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feature Modules
import { UserNavbarModule } from '../user-navbar/user-navbar.module';

// Components
import { UserAccountComponent } from './user-account.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';

// Feature Modules
import { RestaurantLocatorModule } from './components/restaurant-locator/restaurant-locator.module';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { TribeModule } from './components/tribe/tribe.module';



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
    RestaurantLocatorModule,
    RestaurantModule,
    TribeModule
  ]
})
export class UserAccountModule { }
