import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService
  ) { }

  public successMsg(msg: string, title: string = 'Success'): void {
    this.toastr.success(msg, title);
  }

  public errorMsg(msg: string, title: string = 'Error'): void {
    this.toastr.error(msg, title);
  }

  public infoMsg(msg: string, title: string = 'Info'): void {
    this.toastr.info(msg, title);
  }
  public warningMsg(msg: string, title: string = 'Warning'): void {
    this.toastr.warning(msg, title);
  }


}
