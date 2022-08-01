import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
    constructor(private readonly dbService: DatabaseService){}
    
    getUser(): any {
        return this.dbService.getUser()
    }

    getUserRestrictions(): any {
        return this.dbService.getUserRestrictions('1')
    }

    getUserPurchases(): any {
        return this.dbService.getUserPurchases('1')
    }
}
