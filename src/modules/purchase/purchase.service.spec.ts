import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseService } from './purchase.service';
import { DatabaseModule } from '../../database/database.module';
import { HttpException } from '@nestjs/common';

describe('PurchaseService', () => {
  let service: PurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [PurchaseService],
    }).compile();

    service = module.get<PurchaseService>(PurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
  it('should be return purchase details', async () => {
    const purchase = await service.getPurchaseDetail(1, 300199);
    expect(purchase).toEqual({
      id_compra: 300199,
      titulo: 'Apple iPhone 13 Pro Max 2565gb-incluye Cargador -1 Año Gtia.',
      precio: {
        total: 629999.99,
        moneda: 'ARS',
      },
      cantidad: 1,
      fecha: '2022-07-25T10:03:18.000-03:00',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_753104-MLA47778455981_102021-V.webp',
      vendedor: {
        id: 4009,
        nickname: 'ELECTROMIAMI123',
      },
      id_transaccion: 7010199,
      id_envio: 1000010199,
    });
  });

  it('should be throw error when purchase is not found', async () => {
    const purchase = await service.getPurchaseDetail(3, 300199).catch( (error: Error) => {
      return error
    });
    expect(purchase).toBeInstanceOf(HttpException);
  });

    
});
