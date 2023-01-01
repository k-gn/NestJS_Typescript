import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from './decorator/get-user.decorator';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('signIn')
  @UsePipes(ValidationPipe)
  signIn(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Post('test')
  // 미들웨어 : 양 쪽을 연결하여 데이터를 주고 받을 때 매개 역할을 하는 소프트웨어
  // middleware -> guard -> interceptor -> pipe -> controller -> interceptor -> filter -> client
  // using passport auth guard (validate 의 return 값이 request object 에 들어가고, 토큰 유무를 검증해준다.)
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
