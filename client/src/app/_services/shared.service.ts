import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private toastr: ToastrService
  ) { }

  public successMsg(msg: string) {
    this.toastr.success(msg, "Success");
  }

  public errorMsg(msg: string) {
    this.toastr.error(msg, "Error");
  }

  public infoMsg(msg: string) {
    this.toastr.info(msg, "Info");
  }
  public warningMsg(msg: string) {
    this.toastr.warning(msg, "Warning");
  }


}
