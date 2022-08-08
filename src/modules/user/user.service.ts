import { Inject, Injectable, HttpStatus, HttpException } from '@nestjs/common';
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
        const purchases: any = await this.dbService.getUserPurchases(userId)
        if (offset >= purchases.length) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }

        const purchasesResult = [...purchases]

        offset = offset > 0 ? offset + 1 : offset;

        return {
            total: purchases.length,
            offset,
            limit,
            data: purchasesResult.splice(offset, limit),
        };
    }
}
