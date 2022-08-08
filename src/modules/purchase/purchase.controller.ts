import { Controller, Get, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService ) {}

        @Get('/:user_id/:purchase_id')
        purchaseDetail(@Param() params): any{
            return this.purchaseService.getPurchaseDetail(Number(params.user_id), Number(params.purchase_id))
        }
}
