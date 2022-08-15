import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import { DatabaseModule } from '../../database/database.module';
import { HttpException } from '@nestjs/common';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [PaymentService],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return transaction details', async () => {
    const payment = await service.getPayment(7010194);
    expect(payment).toEqual({
      id_transaccion: 7010194,
      estado: 'realizada',
    });
  });

  it('should be throw error when transaction is not found', async () => {
    const payment = await service.getPayment(123123).catch( (error: Error) => {
      return error
    });

    expect(payment).toBeInstanceOf(HttpException);
  });
});
