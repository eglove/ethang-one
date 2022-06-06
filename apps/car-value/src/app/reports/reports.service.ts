import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/user.entity';
import { CreateReportDto } from './dtos/create-report.dto';
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

  async create(reportDto: CreateReportDto, user: User): Promise<Report> {
    const report = this.repository.create(reportDto);
    report.user = user;

    return this.repository.save(report);
  }
}
