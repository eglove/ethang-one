import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

import { User } from '../users/user.entity';

export type UserSession = Request & {
  currentUser?: User;
  session?: {
    userId?: number;
  };
};

export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<UserSession>();

    return typeof request.session?.userId === 'number';
  }
}
