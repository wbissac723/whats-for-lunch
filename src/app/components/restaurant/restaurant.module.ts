import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';

@NgModule({
  declarations: [RestaurantComponent],
  exports: [RestaurantComponent],
  imports: [
    CommonModule
  ]
})
export class RestaurantModule { }
