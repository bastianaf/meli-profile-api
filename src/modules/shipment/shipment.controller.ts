import { Controller, Get } from '@nestjs/common';
import { ShipmentService } from './shipment.service';

@Controller('shipment')
export class ShipmentController {
    constructor(private readonly shipmentService: ShipmentService){}
    
    @Get('/')
    shipment(): any {
        return this.shipmentService.getShipment()
    }
}
