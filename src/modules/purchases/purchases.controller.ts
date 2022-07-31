import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchases.service';


@Controller('purchase')
export class PurchaseController {
    constructor(private readonly purchaseService: PurchaseService) {}

    @Get('/')
    userPurchases(): string {
        return this.purchaseService.getUserPurchases();
    }
}
