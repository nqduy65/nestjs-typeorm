import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;
  // add a comment in line 7
  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;
  // add a comment in line 13
  @Column({ type: 'boolean', default: true })
  active: boolean;
}
