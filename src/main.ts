import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import  helmet from 'helmet';
import { AllExceptionsFilter } from './exception.filter';

async function bootstrap() {
  console.log("⚡MELI PORFILE API | starting...");
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
  });
  // HANDLE EXCEPTIONS
  app.useGlobalFilters(new AllExceptionsFilter());

  // CONFIG
  const config = app.get<ConfigService>(ConfigService);
  app.use(helmet());

  // ⚡ INIT SERVER
  await app.listen(config.get('port'));

  console.log("up and runing at http://localhost:", config.get('port'))

  // EXIT EVENT LISTENER
  process.on('SIGINT', function () {
    console.log('Gracefully shutting down from SIGINT (Ctrl-C)');
    // some other closing procedures go here
    process.exit(1);
  });
}
bootstrap();
