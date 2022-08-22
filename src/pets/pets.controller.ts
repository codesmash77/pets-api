import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Crud({
  model: {
    type: Pet,
  },
})
@Controller('pets')
export class PetsController implements CrudController<Pet> {
  constructor(public service: PetsService) {}
}
