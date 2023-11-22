import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountModule = () => import('./modules/account/account.module').then(m => m.AccountModule);
const homeModule = () => import('./modules/home/home.module').then(m => m.HomeModule);


const routes: Routes = [

  { path: '', loadChildren: accountModule },
  { path: '', loadChildren: homeModule },

  { path: '**', redirectTo: 'main-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
