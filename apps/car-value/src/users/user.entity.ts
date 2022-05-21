import { Logger } from '@nestjs/common';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

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
    Logger.log(`Removed User with id ${this.id}`);
  }
}
