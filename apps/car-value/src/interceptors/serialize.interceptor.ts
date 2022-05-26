import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { map, Observable } from 'rxjs';

export function Serialize<DtoType>(
  dto: ClassConstructor<DtoType>
): MethodDecorator & ClassDecorator {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor<DtoType> implements NestInterceptor {
  constructor(private readonly dto: ClassConstructor<DtoType>) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<DtoType> | Promise<Observable<DtoType>> {
    return next.handle().pipe(
      map((data: DtoType) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
