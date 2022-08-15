import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentService } from './shipment.service';
import { DatabaseModule } from '../../database/database.module';
import { HttpException } from '@nestjs/common';


describe('ShipmentService', () => {
  let service: ShipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [ShipmentService],
    }).compile();

    service = module.get<ShipmentService>(ShipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return shipment details', async () => {
    const shipment = await service.getShipment(1000010192);
    expect(shipment).toEqual({
      id_envio: 1000010192,
      estado: 'cancelado',
    });
  });

  it('should be throw error when ship is not found', async () => {
    const shipment = await service.getShipment(123123).catch( (error: Error) => {
      return error
    });
    expect(shipment).toBeInstanceOf(HttpException);
  });
});
