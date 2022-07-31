import { Module } from '@nestjs/common';
import { PurchaseService } from './purchases.service';
import { PurchaseController } from './purchases.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PurchaseService],
  controllers: [PurchaseController]
})
export class PurchaseModule {}
