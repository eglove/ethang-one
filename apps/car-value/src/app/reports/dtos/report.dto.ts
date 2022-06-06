import { Expose, Transform } from 'class-transformer';

export class ReportDto {
  @Expose()
  id!: number;

  @Expose()
  price!: number;

  @Expose()
  year!: number;

  @Expose()
  saleLongitude!: number;

  @Expose()
  saleLatitude!: number;

  @Expose()
  make!: string;

  @Expose()
  model!: string;

  @Expose()
  mileage!: string;

  @Expose()
  approved!: boolean;

  @Transform(({ obj }) => {
    return obj.user.id as number;
  })
  @Expose()
  userId!: number;
}
