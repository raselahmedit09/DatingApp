import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'member-list', component: MemberListComponent },
      { path: 'members/:id', component: MemberDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MemberRoutingModule { }
