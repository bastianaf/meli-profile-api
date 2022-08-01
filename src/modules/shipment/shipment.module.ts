import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';
import { DatabaseModule } from '../../database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [ShipmentController],
  providers: [ShipmentService]
})
export class ShipmentModule {}
