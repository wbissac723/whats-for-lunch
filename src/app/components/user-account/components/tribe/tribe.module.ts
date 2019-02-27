import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TribeComponent } from './tribe.component';

@NgModule({
  declarations: [TribeComponent],
  exports: [TribeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TribeModule { }
