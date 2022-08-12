import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class PaymentService {
    constructor(private readonly dbService: DatabaseService){}
    
    getPayment(paymentId: number): any {
        return this.dbService.getPayment(paymentId);
    }
}
