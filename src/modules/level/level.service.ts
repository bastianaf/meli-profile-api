import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LevelService {
    constructor(private readonly dbService: DatabaseService){}
    
    getUserLevel(): any {
        return this.dbService.getLevel('ORO')
    }
}
