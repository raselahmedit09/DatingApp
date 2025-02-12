import { NgModule } from '@angular/core';

import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberCardComponent } from './components/member-list/member-card/member-card.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { SharedModule } from 'src/app/_modules/shared.module';
import { MemberMessageComponent } from './components/member-message/member-message.component';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberMessageComponent,
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
