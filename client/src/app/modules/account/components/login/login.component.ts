import { Component } from '@angular/core';
import { AccountService } from '../../services';
import { first } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
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
        //const returnUrl = this.route.snapshot.queryParams['main-dashboard'] || '/';
        this.router.navigateByUrl('/main-dashboard');
      },
      error: error => {
        this.loading = false;
        //this.toastr.error(error, 'Login failed.');
      }
    });


    console.log(this.loginInfo);
  };
}
