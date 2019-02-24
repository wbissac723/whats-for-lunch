import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RestaurantLocatorComponent } from './restaurant-locator.component';

import { RestaurantModule } from '../../../restaurant/restaurant.module';

import { FoodLocatorInterceptor } from 'src/app/interceptors/food-locator.interceptor';

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
