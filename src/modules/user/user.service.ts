import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
    constructor(private readonly dbService: DatabaseService){}
    
    getHello(): any {
        return this.dbService.getUser()
    }
}
