import { AfterViewChecked, Component, Input, input, ViewChild, } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { finalize, first } from 'rxjs';

@Component({
  selector: 'app-member-message',
  templateUrl: './member-message.component.html',
  styleUrl: './member-message.component.css'
})
export class MemberMessageComponent implements AfterViewChecked {
  @ViewChild('scrollMe') scrollContainer?: any;
  @Input() userId!: number

  sendMessageInfo: { recipientUserId: number, content: string } = { recipientUserId: 0, content: '' };

  messages: Message[] = [];
  messageContent = '';
  username: string = '';
  loading = false;

  constructor(private messageService: MessageService) {
  }

  public sendMessage(): void {
    this.sendMessageInfo.recipientUserId = this.userId;
    this.loading = true;
    this.messageService.sendMessage(this.sendMessageInfo)
      .pipe(
        first(),
        finalize(() => this.loading = false) // Use finalize here
      )
      .subscribe({
        next: () => {
          alert(1);
          // Handle success
        },
        error: err => {
          // Handle error
        }
      });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }
}
