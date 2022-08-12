import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../database/database.module';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';

describe('ShipmentController', () => {
  let controller: ShipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [ShipmentService],
      controllers: [ShipmentController],
    }).compile();

    controller = module.get<ShipmentController>(ShipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
