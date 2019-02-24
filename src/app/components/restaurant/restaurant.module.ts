// import { MdDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RestaurantComponent],
  exports: [RestaurantComponent],
  imports: [
    CommonModule,
    SharedModule,
    
  ]
})
export class RestaurantModule { }
