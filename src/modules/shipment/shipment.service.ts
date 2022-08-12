import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class ShipmentService {
    constructor(private readonly dbService: DatabaseService){}

    getShipment(shipmentId: number): any {
       return  this.dbService.getShipment(shipmentId)
    }
}
