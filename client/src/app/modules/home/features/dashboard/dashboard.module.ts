import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SharedModule } from 'src/app/_helpers';


@NgModule({
  declarations: [
    MainDashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
