// import { MdDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { SharedModule } from '../../shared/shared.module';
import { RatingPipe } from './pipes/rating.pipe';

@NgModule({
  declarations: [
    RestaurantComponent,
    RatingPipe
  ],
  exports: [RestaurantComponent],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class RestaurantModule { }
