import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_helpers';

const accountModule = () => import('./modules/account/account.module').then(m => m.AccountModule);
const homeModule = () => import('./modules/home/home.module').then(m => m.HomeModule);


const routes: Routes = [

  { path: '', loadChildren: accountModule },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    loadChildren: homeModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
