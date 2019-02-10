import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHubComponent } from './user-hub.component';

@NgModule({
  declarations: [UserHubComponent],
  exports: [UserHubComponent],
  imports: [CommonModule]
})
export class UserHubModule { }
