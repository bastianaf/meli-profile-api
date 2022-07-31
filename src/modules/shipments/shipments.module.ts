import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';

@Module({
  providers: [ShipmentsService]
})
export class ShipmentsModule {}
