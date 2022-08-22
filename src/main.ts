import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const desc =
    'A Pet API is an Application Programming Interface which developers can use to retrieve data about pets and use it to enhance their own applications.';

  const config = new DocumentBuilder()
    .setTitle('Pets API')
    .setDescription(desc)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
