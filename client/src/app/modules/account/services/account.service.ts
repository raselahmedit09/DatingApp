import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models';
import { SignalRService } from 'src/app/_services/signal-r.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private baseUrl = environment.apiUrl;
  private signalRService = inject(SignalRService);

  private loginUserObservable = new BehaviorSubject<any>(null);
  public getLoginUserObservable = (): Observable<any> => this.loginUserObservable.asObservable();
  public setLoginUserObservable = (user: User | null): void => this.loginUserObservable.next(user);

  constructor(private http: HttpClient) {
    console.log('account service initialized');
  }

  public login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/login', model).pipe(
      map((response: User) => {
        if (response) {
          this.setCurrentUser(response);
        }
      })
    )
  }

  public register(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/register', model).pipe(
      map((response: User) => {
        if (response) {
          this.setCurrentUser(response);
        }
      })
    )
  }

  setCurrentUser(response: User) {
    localStorage.setItem('user', JSON.stringify(response));
    this.setLoginUserObservable(response);

    this.signalRService.createHubConnectionOnlineUsers(response);
  }

  public logout() {
    localStorage.removeItem('user');
    this.setLoginUserObservable(null);
  }

  public getLoginUserData = (): any => {
    return JSON.parse(localStorage.getItem('user') as any);
  }
}
