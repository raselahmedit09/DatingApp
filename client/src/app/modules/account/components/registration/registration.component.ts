import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationInfo: {
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: Date | null,
    userName: string,
    password: string,
    confirmPassword: string
  } =
    {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: null,
      userName: '', password: '',
      confirmPassword: ''
    };
  public loading: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private accountService: AccountService,
    private router: Router,
  ) {
    console.log('Registration component is initialized')
  }

  ngOnInit(): void {

  }

  public registration(): void {
    if (!this.registrationInfo.firstName) {
      this.notificationService.warningMsg('First name is required');
    } else if (!this.registrationInfo.lastName) {
      this.notificationService.warningMsg('Last name is required');
    } else if (!this.registrationInfo.userName) {
      this.notificationService.warningMsg('User name is required');
    } else if (!this.registrationInfo.password) {
      this.notificationService.warningMsg('Password is required');
    } else if (this.registrationInfo.password !== this.registrationInfo.confirmPassword) {
      this.notificationService.warningMsg('Password is not match with confirmation password');
    } else if (!this.registrationInfo.gender) {
      this.notificationService.warningMsg('Gender is required');
    } else if (!this.registrationInfo.dateOfBirth) {
      this.notificationService.warningMsg('Birthday is required');
    }
    else {
      this.loading = true;

      this.accountService.register(this.registrationInfo).pipe(first()).subscribe({
        next: () => {
          this.router.navigateByUrl('/main-dashboard');
        },
        error: err => {
          this.loading = false;
          //   this.NotificationService.errorMsg('Registration failed');
        }
      });
    }
  }
}
