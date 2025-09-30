import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from './boards.service';
import { BoardDto } from './dto/board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardService: BoardService) {}

    @Post()
    createBoard(@Body() boardDto: BoardDto) {
        return this.boardService.createBoard(boardDto);
    }
}
