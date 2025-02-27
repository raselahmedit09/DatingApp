import { AfterViewChecked, Component, Input, input, ViewChild, } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-member-message',
  templateUrl: './member-message.component.html',
  styleUrl: './member-message.component.css'
})
export class MemberMessageComponent implements AfterViewChecked {
  @ViewChild('scrollMe') scrollContainer?: any;
  @Input() userId!: number

  messages: Message[] = [];
  messageContent = '';
  username: string = '';
  loading = false;



  public sendMessage(): void {
    this.loading = true;
    // this.messageService.sendMessage(this.recipientUserId(), this.messageContent).then(() => {
    //   this.messageForm?.reset();
    //   this.scrollToBottom();
    // }).finally(() => this.loading = false);
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
