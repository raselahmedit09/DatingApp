import { Component } from '@angular/core';
import { AccountService } from '../../services';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginInfo: { userName: string, password: string } = { userName: '', password: '' };
  public isInvalidLoginInfo: boolean = false;
  public loading: boolean = false;


  constructor(
    private accountService: AccountService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    console.log('Login component is initialized')
  }

  public login(): void {
    if (!this.loginInfo.userName || !this.loginInfo.password) {
      this.isInvalidLoginInfo = true;
      return;
    }

    this.loading = true;

    this.accountService.login(this.loginInfo).pipe(first()).subscribe({
      next: () => {
        this.router.navigateByUrl('/main-dashboard');
      },
      error: err => {
        this.loading = false;
        //this.notificationService.errorMsg(err.error ? err.error : 'Login Failed');
      }
    });
  };
}
