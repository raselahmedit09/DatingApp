import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MemberList } from '../../models';
import { MemberService } from '../../services';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {

  public members: Observable<MemberList[]> | undefined

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMemberList();
  }

  private getMemberList(): void {
    this.memberService.getMembers().subscribe({
      next: (res) => {
        this.members = of(res);
      },
      error: err => {
      }
    });
  }

}
