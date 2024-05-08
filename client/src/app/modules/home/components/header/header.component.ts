import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/account/models';
import { AccountService } from 'src/app/modules/account/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginUser: User | undefined;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {

  }

  ngOnInit(): void {
    this.loginUser = this.accountService.getLoginUserData();
  }

  public onLogout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  };

}
