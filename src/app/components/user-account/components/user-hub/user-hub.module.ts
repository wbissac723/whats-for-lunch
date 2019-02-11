import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHubComponent } from './user-hub.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserHubComponent],
  exports: [UserHubComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserHubModule { }
