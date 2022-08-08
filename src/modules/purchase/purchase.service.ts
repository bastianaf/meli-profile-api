import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';


@Injectable()
export class PurchaseService {
    constructor(private databaseService: DatabaseService) { }
    
    async getPurchaseDetail(userId: number, purchaseId: number): Promise<any> {
        const purchases: any = await this.databaseService.getUserPurchases(userId)
        return purchases.find(purchase => purchase.id_compra == purchaseId)
    }
}
