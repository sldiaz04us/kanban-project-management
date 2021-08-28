import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import * as express from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  app.use(express.json({ limit: '50mb' }));
  app.use(
    express.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    }),
  );
  const configService = app.get(ConfigService);

  const isProduction = configService.get('STAGE') === 'prod';
  if (isProduction) {
    require('newrelic');
  }

  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
