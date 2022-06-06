import { Logger } from '@nestjs/common';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: true })
  admin!: boolean;

  @OneToMany(
    () => {
      return Report;
    },
    report => {
      return report.user;
    }
  )
  reports!: Report[];

  @AfterInsert()
  logInsert(): void {
    Logger.log(`Inserted User with id ${this.id}`);
  }

  @AfterUpdate()
  logUpdate(): void {
    Logger.log(`Updated User with id ${this.id}`);
  }

  @AfterRemove()
  logRemove(): void {
    Logger.log(`removed User with id ${this.id}`);
  }
}
