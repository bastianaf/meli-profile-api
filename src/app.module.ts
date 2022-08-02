import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ShipmentModule } from './modules/shipment/shipment.module';
import { LevelModule } from './modules/level/level.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    UserModule,
    PaymentModule,
    ShipmentModule,
    LevelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
