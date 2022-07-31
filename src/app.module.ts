import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/users.module';
import { PurchaseModule } from './modules/purchases/purchases.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ShipmentsController } from './modules/shipments/shipments.controller';
import { ShipmentsModule } from './modules/shipments/shipments.module';

@Module({
  imports: [UserModule, PurchaseModule, PaymentsModule, ShipmentsModule],
  controllers: [AppController, ShipmentsController],
  providers: [AppService],
})
export class AppModule {}
