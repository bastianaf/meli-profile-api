import { Controller, Get, Param } from '@nestjs/common';
import { ShipmentService } from './shipment.service';

@Controller('shipment')
export class ShipmentController {
    constructor(private readonly shipmentService: ShipmentService){}
    
    @Get('/:shipment_id')
    shipment(@Param() params): any {
        return this.shipmentService.getShipment(Number(params.shipment_id))
    }
}
