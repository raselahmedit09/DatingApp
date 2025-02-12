import { Component, input, } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-member-message',
  templateUrl: './member-message.component.html',
  styleUrl: './member-message.component.css'
})
export class MemberMessageComponent {
  memeberId = input.required<number>();

  messages: Message[] = [];
  messageContent = '';
  username: string = '';


  public sendMessage(): void {

  }
}
