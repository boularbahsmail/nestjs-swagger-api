import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Init nestjs class validation pipes
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('NestJs API')
    .setDescription('A simple nestjs api built from scratch :D')
    .setVersion('1.0.0')
    .setContact(
      'Ismail Boularbah',
      'https://github.com/boularbahsmail',
      'boularbahismail01@gmail.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
  // efaultModelsExpandDepth: -1 ==> Hide models schemas section

  await app.listen(5000);
}
bootstrap();
