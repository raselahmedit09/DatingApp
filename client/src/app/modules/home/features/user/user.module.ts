import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SharedModule } from 'src/app/_modules/shared.module';


@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
