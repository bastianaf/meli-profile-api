import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PaymentsService {
    constructor(private readonly dbService: DatabaseService){}
    
    getPayment(): any {
        return this.dbService.getPayment(7010191);
    }
}