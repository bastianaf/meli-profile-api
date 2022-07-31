import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PurchaseService {
    constructor(private readonly dbService: DatabaseService){}
    
    getUserPurchases(): any {
        return this.dbService.getUserPurchases('1')
    }

    

}
