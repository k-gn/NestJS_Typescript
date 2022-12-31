import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

// generate controller command : nest g controller boards --no-spec (--no-spec : 테스트를 위한 소스코드 생성 X)
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
}
