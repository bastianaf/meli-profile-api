import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ShipmentService {
    constructor(private readonly dbService: DatabaseService){}

    getShipment(): any {
        return this.dbService.getShipment(1000010191)
    }
}
