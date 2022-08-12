import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import  helmet from 'helmet';
import { AllExceptionsFilter } from './exception.filter';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
  });
  // HANDLE EXCEPTIONS
  app.useGlobalFilters(new AllExceptionsFilter());

  // HELMET
  app.use(helmet());

  // ⚡ INIT SERVER
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({app: expressApp});

}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

