import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

import { UserSession } from '../../guards/auth.guard';
import { UsersService } from '../users.service';

export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(
    request: UserSession,
    _: Response,
    next: NextFunction
  ): Promise<void> {
    const userId = request.session?.userId;

    if (
      typeof userId !== 'undefined' &&
      typeof this.usersService !== 'undefined'
    ) {
      request.currentUser = await this.usersService.findOne(userId);
    }

    next();
  }
}
