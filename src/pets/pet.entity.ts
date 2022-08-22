import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  age: number;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  breed: string;

  @ApiProperty()
  @Column()
  owner: string;
}
