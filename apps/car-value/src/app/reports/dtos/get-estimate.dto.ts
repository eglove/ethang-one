import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from '@nestjs/class-validator';
import { Transform } from 'class-transformer';

const parseNumber = ({ value }: { value: unknown }): number => {
  return Number(value);
};

export class GetEstimateDto {
  @Transform(parseNumber)
  @IsLongitude()
  saleLongitude!: number;

  @Transform(parseNumber)
  @IsLatitude()
  saleLatitude!: number;

  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @Transform(parseNumber)
  @IsNumber()
  @Min(1930)
  @Max(new Date().getFullYear() + 1)
  year!: number;

  @Transform(parseNumber)
  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  mileage!: number;
}
