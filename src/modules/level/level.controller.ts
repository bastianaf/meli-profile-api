import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
    constructor(private readonly levelService: LevelService) {}

    @Get('/:level_id')
    getUserLevel(@Param() params): any {
        const levelId = (String(params.level_id)).toUpperCase()
        return this.levelService.getUserLevel(levelId);
    }
}
