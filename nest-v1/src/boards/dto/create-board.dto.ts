import { IsNotEmpty } from 'class-validator';

// 클래스는 인터페이스와 다르게 런타임에 동작하기 때문에 파이프 같은 기능을 이용 시 유용하다. (ex. DTO)
export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
