import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entity/user.entity';

// generate service command : nest g service boards --no-spec
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  // select all board
  getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  // select one by id
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException('can not found board by id');
    }

    return found;
  }

  // select one by user
  async getAllBoardsByUser(user: User): Promise<Board[]> {
    // 복잡한 쿼리일 경우 queryBuilder 를 사용하면 된다.
    const query = this.boardRepository.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });

    const boards = await query.getMany();
    return boards;
  }

  // save board
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const board = this.boardRepository.create({
      ...createBoardDto,
      status: BoardStatus.PUBLIC,
      user,
    });
    await this.boardRepository.save(board);
    return board;
  }

  // delete board
  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.boardRepository
      .createQueryBuilder('board')
      .delete()
      .where('id = :id and userId = :userId', { id: id, userId: user.id })
      .execute();

    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }

  // update status
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;

    await this.boardRepository.save(board);

    return board;
  }
}

// 애플리케이션 운영 시 발생하는 에러를 파악하기 위해 로그는 굉장히 중요하다.
// Log - 중요한 정보의 범용 로깅
// Warning - 치명적이거나 파괴적이지 않은 처리되지 않은 문제
// Error - 치면적이거나 파괴적인 처리되지 않은 문제
// Debug - 오류 발생 시 디버그하는데 도움을 주는 정보
// Verbose - 응용 프로그램 동작에 대한 통찰력 제공
// 로그는 하나하나 개발하면서 넣는다.
