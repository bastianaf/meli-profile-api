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

    async getUserPurchases(userId: string, limit: number = 9, offset: number = 0): Promise<any> {

        console.log("PAGINATION: Limit, Offset",limit, offset)
        const purchases: any = await this.dbService.getUserPurchases(userId)
        if (offset >= purchases.length) {
            const error = new Error('Bad request');
            //error.status = 400;
            throw error;
        }

        const purchasesResult = [...purchases]

        offset = offset > 0 ? offset + 1 : offset;

        console.log("new purchase array length: " + JSON.stringify(purchasesResult.length))
        return {
            total: purchases.length,
            offset,
            limit,
            data: purchasesResult.splice(offset, limit),  
            
        };
    }
}
