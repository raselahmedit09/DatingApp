import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const dashboardModule = () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule);
const userModule = () => import('./features/user/user.module').then(m => m.UserModule);
const memberModule = () => import('./features/member/member.module').then(m => m.MemberModule);

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', loadChildren: dashboardModule },
      { path: '', loadChildren: userModule },
      { path: '', loadChildren: memberModule },
      { path: '**', redirectTo: 'main-dashboard' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
