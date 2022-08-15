import { Test, TestingModule } from '@nestjs/testing';
import { LevelService } from './level.service';
import { DatabaseModule } from '../../database/database.module';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('LevelService', () => {
  let service: LevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [LevelService],
    }).compile();

    service = module.get<LevelService>(LevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return ORO level details', async () => {
    const level = await service.getUserLevel('ORO');
    expect(level).toEqual({
      id_nivel: 'ORO',
      descripción: 'Nivel Oro - Mercadopuntos',
    });
  });

  it('should be throw error when level is not found', async () => {
    const level = await service.getUserLevel('PLATA').catch( (error: Error) => {
      return error
    });
    expect(level).toBeInstanceOf(HttpException);
  });
   
});
