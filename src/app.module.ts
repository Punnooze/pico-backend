import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { CustomersModule } from './customers/customers.module';
import { BoardsModule } from './boards/boards.module';
import key from './config/key';

@Module({
  imports: [MongooseModule.forRoot(key.mongoUri), TasksModule, CustomersModule, BoardsModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
