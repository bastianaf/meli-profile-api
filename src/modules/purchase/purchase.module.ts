import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { DatabaseModule } from '../../database/database.module';
import { PurchaseController } from './purchase.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
