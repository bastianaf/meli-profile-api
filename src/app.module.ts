import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PurchaseModule } from './modules/purchase/purchase.module';

@Module({
  imports: [UserModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
