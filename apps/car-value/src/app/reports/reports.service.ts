import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

import { User } from '../users/user.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private readonly repository: Repository<Report>
  ) {}

  async changeApproval(id: number, approved: boolean): Promise<Report> {
    const report = await this.repository.findOne({ where: { id } });

    if (report === null) {
      throw new NotFoundException('Report not found.');
    }

    report.approved = approved;
    return this.repository.save(report);
  }

  async createEstimate(estimateDto: GetEstimateDto): Promise<Report[]> {
    return this.repository.find({
      order: {
        mileage: 'desc',
      },
      take: 3,
      where: {
        make: estimateDto.make,
        model: estimateDto.model,
        saleLatitude: Between(
          estimateDto.saleLatitude - 5,
          estimateDto.saleLatitude + 5
        ),
        saleLongitude: Between(
          estimateDto.saleLongitude - 5,
          estimateDto.saleLongitude + 5
        ),
        year: Between(estimateDto.year - 3, estimateDto.year + 3),
      },
    });
  }

  async create(reportDto: CreateReportDto, user: User): Promise<Report> {
    const report = this.repository.create(reportDto);
    report.user = user;

    return this.repository.save(report);
  }
}
