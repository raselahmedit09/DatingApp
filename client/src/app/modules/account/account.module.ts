import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from 'src/app/_helpers';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule {
  constructor() {
    console.log('Account module loaded')
  }
}
