import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantLocatorComponent } from './restaurant-locator.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodLocatorInterceptor } from '../../../interceptors/food-locator.interceptor';
import { RestaurantModule } from '../../../restaurant/restaurant.module';

@NgModule({
  declarations: [RestaurantLocatorComponent],
  exports: [RestaurantLocatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestaurantModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FoodLocatorInterceptor, multi: true }
  ]
})
export class RestaurantLocatorModule { }
