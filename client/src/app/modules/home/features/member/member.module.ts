import { NgModule } from '@angular/core';

import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { SharedModule } from 'src/app/_helpers';
import { MemberCardComponent } from './components/member-list/member-card/member-card.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
  ],
  imports: [
    MemberRoutingModule,
    SharedModule,
  ],
})
export class MemberModule {
  constructor() {
    console.log('Member module loaded')
  }
}
