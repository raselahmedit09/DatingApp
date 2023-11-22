import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private baseUrl = environment.apiUrl;
  //private baseUrl = 'https://localhost:5001/api/';

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
          localStorage.setItem('user', JSON.stringify(response));
          this.setLoginUserObservable(response);
        }
      })
    )
  }

  public logout() {
    localStorage.removeItem('user');
    this.setLoginUserObservable(null);
  }

  public getLoginUserData = (): any => {
    return JSON.parse(localStorage.getItem('user') as any);
  }
}
