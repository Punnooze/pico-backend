import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './interfaces/board.interfaces';
import { Model } from 'mongoose';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  async createBoard(boardDto: BoardDto): Promise<Board | null> {
    const newBoard = new this.boardModel(boardDto);
    return await newBoard.save();
  }
  async getAllBoards(): Promise<Board[]> {
    return await this.boardModel.find();
  }
  async getBoardById(id: string): Promise<Board | null> {
    return await this.boardModel.findOne({ _id: id });
  }
}
