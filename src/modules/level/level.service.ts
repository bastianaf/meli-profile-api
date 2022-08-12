import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class LevelService {
    constructor(private readonly dbService: DatabaseService){}
    
    getUserLevel(levelId: string): any {
        return this.dbService.getLevel(levelId)
    }
}
