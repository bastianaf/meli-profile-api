import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ShipmentModule } from './modules/shipment/shipment.module';
import { LevelModule } from './modules/level/level.module';

@Module({
  imports: [UserModule, PaymentModule, ShipmentModule, LevelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
