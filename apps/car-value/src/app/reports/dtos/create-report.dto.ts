import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from '@nestjs/class-validator';

export class CreateReportDto {
  @IsLongitude()
  saleLongitude!: number;

  @IsLatitude()
  saleLatitude!: number;

  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @IsNumber()
  @Min(1930)
  @Max(new Date().getFullYear() + 1)
  year!: number;

  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  mileage!: number;

  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  price!: number;
}
