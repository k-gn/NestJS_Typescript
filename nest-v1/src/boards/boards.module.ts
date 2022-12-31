import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

// generate module command : nest g module boards
@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
