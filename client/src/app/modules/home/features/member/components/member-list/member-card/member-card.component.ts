import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { Member } from '../../../models';
import { SignalRService } from 'src/app/_services/signal-r.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() member!: Member;

  private signalRService = inject(SignalRService);

  isOnline: any;

  ngOnInit(): void {
    this.isOnline = computed(() => this.signalRService.onlineUserIds().includes(this.member.userId));
  }



}
