import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models';
import { GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  images: GalleryItem[] = [];


  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }

  private loadMember(): void {
    throw new Error('Method not implemented.');
  }

}
