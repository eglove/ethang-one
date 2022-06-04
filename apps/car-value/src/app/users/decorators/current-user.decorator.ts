import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { UserSession } from '../../guards/auth.guard';

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<UserSession>();

    return request.currentUser;
  }
);
