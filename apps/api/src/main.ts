/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import "reflect-metadata"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
//nx run-many --parallel --target=serve --projects=api,example1
bootstrap();
