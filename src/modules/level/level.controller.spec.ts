import { Test, TestingModule } from '@nestjs/testing';
import { LevelController } from './level.controller';
import { DatabaseModule } from '../../database/database.module';
import { LevelService } from './level.service';

describe('LevelController', () => {
  let controller: LevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [LevelService],
      controllers: [LevelController],
    }).compile();

    controller = module.get<LevelController>(LevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
