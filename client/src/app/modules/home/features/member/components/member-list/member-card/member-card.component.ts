import { Component, Input } from '@angular/core';
import { MemberList } from '../../../models';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member: MemberList | undefined;

}
