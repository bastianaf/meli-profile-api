import { Controller, Get, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Get('/:payment_id')
    getPayment(@Param() params): any {
        return this.paymentService.getPayment(Number(params.payment_id));
    }
}
