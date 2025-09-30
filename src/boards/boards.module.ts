import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardSchema } from './schemas/board.schemas';
import { BoardService } from './boards.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  controllers: [BoardsController],
  providers: [BoardService],
})
export class BoardsModule {}
