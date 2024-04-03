import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/_helpers';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


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
