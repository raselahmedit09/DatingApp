import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/modules/account/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {

  }

  ngOnInit(): void {

  }

  public onLogout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  };

}
