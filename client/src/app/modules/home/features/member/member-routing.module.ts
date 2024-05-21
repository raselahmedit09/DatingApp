import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'member-list', component: MemberListComponent },
      { path: 'member/:id', component: MemberDetailComponent },
      { path: 'member-edit/:id', component: MemberEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MemberRoutingModule { }
