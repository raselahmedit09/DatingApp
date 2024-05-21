import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable, catchError } from 'rxjs';
import { NotificationService } from '../_services/notification.service';
import { AccountService } from '../modules/account/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _NotificationService: NotificationService,
    private _accountService: AccountService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err) {
          switch (err.status) {
            case 400:
              this._NotificationService.errorMsg(err.error);
              break;
            case 401:
              this._NotificationService.errorMsg('Unauthorized request');
              this._accountService.logout();
              break;
            case 404:
              this._NotificationService.errorMsg('Not Found');
              break;
            case 500:
              this._NotificationService.errorMsg('Internal Server Error');
              break;
            default:
              this._NotificationService.errorMsg('Something unexpected went wrong');
              break;
          }
        }
        throw err;
      })
    )
  }
}