import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { BusyService } from '../_services/busy.service';
import { Observable, delay, finalize } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();

    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.busyService.idle();
      })
    )
  }
};
