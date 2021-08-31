import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('MONGODB_URI'),
          useCreateIndex: true,
          useNewUrlParser: true,
          useFindAndModify: false,
        };
      },
    }),
  ],
})
export class MongoRootProviderModule {}
