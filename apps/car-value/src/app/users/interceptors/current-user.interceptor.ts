import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserSession } from '../../guards/auth.guard';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<unknown>> {
    const request = context.switchToHttp().getRequest<UserSession>();

    if (typeof request.session?.userId === 'number') {
      request.currentUser = await this.usersService.findOne(
        request.session.userId
      );
    }

    return next.handle();
  }
}
