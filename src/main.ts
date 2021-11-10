import { NestFactory } from '@nestjs/core';
import { ExternalExceptionFilter } from '@nestjs/core/exceptions/external-exception-filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ExternalExceptionFilter());

  await app.listen(process.env.PORT || 9000);
}

bootstrap();
