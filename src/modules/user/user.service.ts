import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
    constructor(private readonly dbService: DatabaseService){}
    
    getUser(): any {
        return this.dbService.getUser()
    }

    getUserRestrictions(userId: string): any {
        return this.dbService.getUserRestrictions(userId)
    }

    getUserPurchases(userId: string): any {
        return this.dbService.getUserPurchases(userId)
    }
}
