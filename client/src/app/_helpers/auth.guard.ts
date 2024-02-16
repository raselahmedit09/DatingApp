import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../modules/account/services';
import { SharedService } from './shared.service';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const sharedService = inject(SharedService);
  const router = inject(Router);

  const loginUser = accountService.getLoginUserData();

  if (loginUser) {
    return true;
  } else {
    router.navigate(['/login']);
    sharedService.warningMsg('You shall not pass');
    return false;
  }
};
