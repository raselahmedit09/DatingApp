import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberDetail } from '../../models/memberDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../services';
import { NotificationService } from 'src/app/_services';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm | undefined;

  public member!: MemberDetail;

  private readonly memberId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService,
    private notificationService: NotificationService,

  ) {
    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadMember();
  }

  private loadMember(): void {
    this.memberService.getMemberById(this.memberId).subscribe({
      next: (res) => {
        this.member = res;
      },
      error: err => {
      }
    });
  }

  public updateMember(): void {
    this.memberService.updateMember(this.member).subscribe({
      next: (res) => {
        this.notificationService.successMsg('Member info updated');
        this.router.navigateByUrl('/main-dashboard');
      },
      error: err => {
      }
    });
  }

}
