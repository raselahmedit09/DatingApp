import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/account/models';
import { AccountService } from 'src/app/modules/account/services';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  public loginUser: User | undefined;

  constructor(
    private accountService: AccountService,
  ) {
    console.log('App component initialized!');
  }

  ngOnInit(): void {
    this.loginUser = this.accountService.getLoginUserData();
    console.log(this.loginUser);
  }
}