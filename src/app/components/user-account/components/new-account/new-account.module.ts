import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountComponent } from './new-account.component';

@NgModule({
  declarations: [NewAccountComponent],
  exports: [NewAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NewAccountModule { }
