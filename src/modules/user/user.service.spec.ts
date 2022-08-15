import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { DatabaseModule } from '../../database/database.module';
import { HttpException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  //SERVICE

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // USER

  it('should be return user', async () => {
    const user = await service.getUser();
    expect(user).toEqual({
      id_usuario: 1,
      nombre: 'Mercadolibre',
      apellido: 'User',
      nivel: 'ORO',
      imagen:
        'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png',
    });
  });

  // USER PURCHASES

  it('should be return user purchases', async () => {
    const user = await service.getUserPurchases('1', 2, 0);
    expect(user).toEqual({
      data: [
        {
          cantidad: 3,
          fecha: '2022-07-25T10:23:18.000-03:00',
          id_compra: 300200,
          id_envio: 1000010200,
          id_transaccion: 7010200,
          imagen:
            'https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp',
          precio: { moneda: 'ARS', total: 105000 },
          titulo: 'Celular LG K40',
          vendedor: { id: 4010, nickname: 'FAROCUDR19' },
        },
        {
          cantidad: 1,
          fecha: '2022-07-25T10:03:18.000-03:00',
          id_compra: 300199,
          id_envio: 1000010199,
          id_transaccion: 7010199,
          imagen:
            'https://http2.mlstatic.com/D_NQ_NP_753104-MLA47778455981_102021-V.webp',
          precio: { moneda: 'ARS', total: 629999.99 },
          titulo:
            'Apple iPhone 13 Pro Max 2565gb-incluye Cargador -1 Año Gtia.',
          vendedor: { id: 4009, nickname: 'ELECTROMIAMI123' },
        },
      ],
      limit: 2,
      offset: 0,
      total: 10,
    });
  });

  it('should be throw error when user  purchases is not found', async () => {
    const userPurchases = await service
      .getUserPurchases('3')
      .catch((error: Error) => {
        return error;
      });
    expect(userPurchases).toBeInstanceOf(HttpException);
  });

  it('should be throw error when user purchases result limit is exceeded', async () => {
    const userPurchases = await service
      .getUserPurchases('3', 30, 20)
      .catch((error: Error) => {
        return error;
      });
    expect(userPurchases).toBeInstanceOf(HttpException);
  });

  // USER RESTRICTIONS

  it('should be return user restrictions', async () => {
    const user = await service.getUserRestrictions('1');
    expect(user).toEqual([
      {
        mensaje: 'Tu cuenta no ha sido verificada aún. Revisa tu mail',
        tipo: 'warning',
      },
    ]);
  });

  it('should be throw error when user restrictions not found', async () => {
    const userRestrictions = await service
      .getUserRestrictions('3')
      .catch((error: Error) => {
        return error;
      });
    expect(userRestrictions).toBeInstanceOf(HttpException);
  });
});
