import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { MemberDetail } from '../../models/memberDetail';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs', { static: false }) memberTabs!: TabsetComponent;
  @ViewChild('messagesTab', { static: false }) messagesTab!: TabDirective;

  public member!: MemberDetail;
  public images: GalleryItem[] = [];
  activeTab?: TabDirective;
  private memberId: any = 0;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.memberId = this.route.snapshot.paramMap.get('id');
    if (!this.memberId) return;

    this.loadMember();
  }

  private loadMember() {
    this.memberService.getMemberWithPhotosById(this.memberId).subscribe({
      next: (res) => {
        this.member = res;
        this.getImages();
      },
      error: err => {
      }
    });
  }

  private getImages() {
    if (!this.member) return;

    this.images = this.member?.memberPhotos.map(
      (item: any) => new ImageItem({ src: item.photoUrl, thumb: item.photoUrl })
    );
  }

  openMessagesTab() {
    if (this.messagesTab) {
      this.messagesTab.active = true; // Activate the "Messages" tab
    }
  }

  onTabActivated(data: TabDirective) {
    this.activeTab = data;
  }

}
