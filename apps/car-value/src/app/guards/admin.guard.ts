import { CanActivate, ExecutionContext } from '@nestjs/common';

import { UserSession } from './auth.guard';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<UserSession>();

    if (typeof request.currentUser === 'undefined') {
      return false;
    }

    return request.currentUser.admin;
  }
}
