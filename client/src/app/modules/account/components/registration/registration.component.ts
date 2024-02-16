import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/_helpers';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationInfo: { userName: string, password: string, confirmPassword: string } = { userName: '', password: '', confirmPassword: '' };
  public loading: boolean = false;

  constructor(
    private sharedService: SharedService,
    private accountService: AccountService,
    private router: Router,
  ) {
    console.log('Registration component is initialized')
  }

  ngOnInit(): void {

  }

  public registration(): void {
    if (!this.registrationInfo.userName) {
      this.sharedService.warningMsg('User name is required');
    } else if (!this.registrationInfo.password) {
      this.sharedService.warningMsg('Password is required');
    } else if (this.registrationInfo.password !== this.registrationInfo.confirmPassword) {
      this.sharedService.warningMsg('Password is not match with confirmation password');
    } else {
      this.loading = true;

      this.accountService.register(this.registrationInfo).pipe(first()).subscribe({
        next: () => {
          this.router.navigateByUrl('/main-dashboard');
        },
        error: err => {
          this.loading = false;
          //   this.sharedService.errorMsg('Registration failed');
        }
      });
    }
  }
}
