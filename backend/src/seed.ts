import { NestFactory } from '@nestjs/core';

import { SeederModule } from './database/seeders/seeder.module';
import { Seeder } from './database/seeders/seeder.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeederModule);
  const seeder = appContext.get(Seeder);

  await seeder.seedDatabase();
  await appContext.close();

  process.exit();
}
bootstrap();
