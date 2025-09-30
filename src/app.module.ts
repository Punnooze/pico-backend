import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import key from './config/key';

@Module({
  imports: [MongooseModule.forRoot(key.mongoUri), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
