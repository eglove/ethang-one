import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../users/user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: false })
  approved!: boolean;

  @Column()
  price!: number;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  saleLongitude!: number;

  @Column()
  saleLatitude!: number;

  @Column()
  mileage!: number;

  @ManyToOne(
    () => {
      return User;
    },
    user => {
      return user.reports;
    }
  )
  user!: User;
}
