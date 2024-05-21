import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../modules/account/services';
import { NotificationService } from './notification.service';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const notificationService = inject(NotificationService);
  const router = inject(Router);

  const loginUser = accountService.getLoginUserData();

  if (loginUser) {
    return true;
  } else {
    router.navigate(['/login']);
    notificationService.warningMsg('You shall not pass');
    return false;
  }
};
