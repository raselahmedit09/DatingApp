import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './modules/account/models';
import { AccountService } from './modules/account/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public loginUser: User | undefined;

  constructor(
    private accountService: AccountService
  ) {
    console.log('App component initialized!');

    this.accountService.getLoginUserObservable().subscribe(user => {
      if (user)
        this.loginUser = user;
    });
  }

  ngOnInit(): void {
    this.loginUser = this.accountService.getLoginUserData();
  }

}
