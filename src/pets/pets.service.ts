import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService extends TypeOrmCrudService<Pet> {
  constructor(@InjectRepository(Pet) repo) {
    super(repo);
  }
}
